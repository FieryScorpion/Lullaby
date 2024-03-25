import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";


const getSongs =  async (): Promise<Song[]> => {
    const supaBase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = 

}
