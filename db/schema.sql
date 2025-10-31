-- ==============================================
-- 🧠 SPARKVIBE DATABASE SCHEMA
-- ==============================================

create table if not exists public.generation_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  input text not null,
  output jsonb not null,
  model_used text not null,
  created_at timestamp with time zone default now()
);

-- 🔒 Row Level Security
alter table public.generation_logs enable row level security;

-- Allow user to insert their own data
create policy "Allow insert own" on public.generation_logs
for insert with check (auth.uid() = user_id or user_id is null);

-- Allow user to read only their data
create policy "Allow select own" on public.generation_logs
for select using (auth.uid() = user_id or user_id is null);
