import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { IncomingMessage } from "http"; // Import IncomingMessage for Next.js server-side usage

import { Song } from "@/types";

const getSongs = async (req: IncomingMessage): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: req.headers.cookie, // Pass cookies from the request headers
    supabaseUrl: process.env.,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  });

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return data || []; // No need for type casting, Supabase data should be already typed
};

export default getSongs;
