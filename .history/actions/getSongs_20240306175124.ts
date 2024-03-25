import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { supabase } from "@supabase/auth-ui-shared";
import { headers, cookies } from "next/headers";


const getSongs =  async (): Promise<Song[]> => {
    const supaBase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false})

}
