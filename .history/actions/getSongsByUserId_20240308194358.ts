import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

const getSongsByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });
const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

if (sessionError) {
    console.log(sessionError.message);
    return [];
}
cosnt { data,error}

};

export default getSongsByUserId;
