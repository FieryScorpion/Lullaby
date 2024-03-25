import { useState } from "react";
import { createClient } from "@supabase/supabase-js"; // corrected import
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Database } from "@/types_db";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClient("", "https://yqfhyzgyvhgotgqwiesq.supabase.co") // provide your Supabase URL and Anon key here
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
