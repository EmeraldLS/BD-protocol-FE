import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const GET: APIRoute = async ({ redirect, cookies }) => {
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });

  return redirect("/signin");
};
