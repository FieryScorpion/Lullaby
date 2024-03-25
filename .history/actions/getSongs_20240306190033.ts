import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { IncomingMessage } from "http"; // Import IncomingMessage for Next.js server-side usage

import { Song } from "@/types";

const getSongs = async (): Promise<Song[]> => {
  const supabaseUrl = process.env.https://yqfhyzgyvhgotgqwiesq.supabase.co;
  const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxZmh5emd5dmhnb3RncXdpZXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NTE0MjUsImV4cCI6MjAyNTAyNzQyNX0.2NT_9jXFmE3ODa2cmWsHTl3Pb_KFW16_0JswKpeSiUQ;

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

