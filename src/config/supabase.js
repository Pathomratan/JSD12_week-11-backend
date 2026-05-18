import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process. env. SUPABASE_URL;
const supabasekey = process. env. SUPABASE_SECRET_KEY;

export const supabase = createClient (supabaseUrl, supabasekey) ;

export async function connectSupabase() {
    try {
        const { error } = await supabase.from("users"). select("id"). limit(1);
        if (error) throw error;
        console. log("Supabase connected ✅");
    } catch (err) {
        console.error ("Supabase connection error ❌", err);
        throw err;
    }
}