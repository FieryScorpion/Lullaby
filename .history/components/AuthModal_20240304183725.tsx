"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Modal from "./Modal"

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter
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