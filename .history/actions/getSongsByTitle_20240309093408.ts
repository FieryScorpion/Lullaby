import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

const getSongsByTitle = async (title: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });
  if (!title) 

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getSongsByTitle;
