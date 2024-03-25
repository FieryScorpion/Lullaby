import { useState } from "react";
import { createClient } from "@supabase/supabase-js"; // corrected import
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Database } from "@/types_db";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClient( "https://yqfhyzgyvhgotgqwiesq.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxZmh5emd5dmhnb3RncXdpZXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NTE0MjUsImV4cCI6MjAyNTAyNzQyNX0.2NT_9jXFmE3ODa2cmWsHTl3Pb_KFW16_0JswKpeSiUQ")// provide your Supabase URL and Anon key here
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
