"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Modal from "./Modal"
import { useRouter } from "next/router";

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    return (
        <Modal
        title="Welcome back!"
        description="Login to your account"
        isOpen
        onChange={() =>  {}}
        >
            Auth modal children!
        </Modal>
    );
}
export default AuthModal;
