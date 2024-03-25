import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { IncomingMessage } from "http"; // Import IncomingMessage for Next.js server-side usage

import { Song } from "@/types";

const getSongs = async (req: IncomingMessage): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: req.headers.cookie, // Pass cookies from the request headers
    supabaseUrl: process.env.https://yqfhyzgyvhgotgqwiesq.supabase.co,
    supabaseKey: process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxZmh5emd5dmhnb3RncXdpZXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NTE0MjUsImV4cCI6MjAyNTAyNzQyNX0.2NT_9jXFmE3ODa2cmWsHTl3Pb_KFW16_0JswKpeSiUQ
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
