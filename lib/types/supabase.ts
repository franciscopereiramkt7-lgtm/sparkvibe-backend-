export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      generation_logs: {
        Row: { id: string; user_id: string | null; input: string; output: string; model_used: string; created_at: string };
        Insert: { id?: string; user_id?: string | null; input: string; output: string; model_used: string; created_at?: string };
        Update: Partial<{ input: string; output: string; model_used: string }>;
      };
    };
  };
}
