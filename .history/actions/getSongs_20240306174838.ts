import { Song } from "@/types";
import { headers, cookies } from "next/headers";


const getSongs =  async (): Promise<Song[]> => {
    const supaBase = createServerComponentClient({
        headers: headers,
        cookies: cookies
    })

}
