import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import { createClient } from "@/lib/server";

export async function POST(req: Request) {
  try {
    const { input, user_id } = await req.json();
    if (!input) return NextResponse.json({ error: "Missing input" }, { status: 400 });

    const ai = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Generate 3 viral titles for: ${input}` }],
    });

    const raw = ai.choices[0]?.message?.content ?? "";
    const titles = raw.split("\n").filter(Boolean);

    const supabase = createClient();
    await supabase.from("generation_logs").insert({
      user_id: user_id ?? null,
      input,
      output: JSON.stringify(titles),
      model_used: "gpt-3.5-turbo",
    });

    return NextResponse.json({ titles });
  } catch (err) {
    console.error("❌ Error generating titles:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
