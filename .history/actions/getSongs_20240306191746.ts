import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

const getSongs = async (): Promise<Song[]> => {
  const supabase = createClient( "https://yqfhyzgyvhgotgqwiesq.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxZmh5emd5dmhnb3RncXdpZXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NTE0MjUsImV4cCI6MjAyNTAyNzQyNX0.2NT_9jXFmE3ODa2cmWsHTl3Pb_KFW16_0JswKpeSiUQ")// provide your Supabase URL and Anon key here
    cookies: cookies
  };

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getSongs;
