import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://ezpceifbimjttyxazksp.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6cGNlaWZiaW1qdHR5eGF6a3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzMTEyOTcsImV4cCI6MjAyMzg4NzI5N30.68TTuyXtQnNXr-PZ9OlMnTAWnsfxCN-wSPstej3BAKo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
