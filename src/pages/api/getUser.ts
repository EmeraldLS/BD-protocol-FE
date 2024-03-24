import { supabase } from "@/lib/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request, cookies }) => {
  const token = cookies.get("sb-access-token")?.value;
  const { data, error } = await supabase.auth.getUser(token!);
};
