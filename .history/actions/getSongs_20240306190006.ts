import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { IncomingMessage } from "http"; // Import IncomingMessage for Next.js server-side usage

import { Song } from "@/types";

const getSongs = async (): Promise<Song[]> => {
  const supabaseUrl = process.env.;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL and anonymous key are required.");
  }

  const supabase = createServerComponentClient({
    supabaseUrl: supabaseUrl,
    supabaseKey: supabaseKey
  });

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.log(error.message);
    throw new Error("Error fetching songs from Supabase.");
  }

  return data || [];
};

export default getSongs;

