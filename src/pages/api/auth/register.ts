import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const fname = formData.get("fname")?.toString();
    const lname = formData.get("lname")?.toString();
    const fullname = `${fname} ${lname}`;

    if (!email || !password || !fullname) {
      return new Response("Email and password are required", { status: 400 });
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullname,
        },
      },
    });

    if (error) {
      return new Response(error.message, { status: 500 });
    }
  } catch (err) {
    return new Response("unexpected error occured, pls try again", {
      status: 500,
    });
  }

  return redirect("/signin");
};
