import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import { openai } from "../../../lib/openai";
import { supabaseAdmin } from "../../../lib/server";

export async function POST(req: Request) {
  try {
    const { input } = await req.json();

    if (!input || input.trim().length < 3) {
      return NextResponse.json(
        { error: "Input demasiado curto para gerar títulos." },
        { status: 400 }
      );
    }

    const prompt = `Gera 5 títulos curtos, virais e criativos para vídeos com o tema: "${input}".
    Responde em formato JSON: { "titles": ["...", "...", "..."] }`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.9,
      max_tokens: 200,
    });

    const raw = completion.choices?.[0]?.message?.content || "{}";
    const titles = JSON.parse(raw).titles || [];

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    await supabase.from("generated_titles").insert({
      input_text: input,
      titles,
    });

    return NextResponse.json({ titles });
  } catch (error) {
    console.error("Erro na geração:", error);
    return NextResponse.json(
      { error: "Falha na geração de títulos." },
      { status: 500 }
    );
  }
}
