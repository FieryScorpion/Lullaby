"use client";

import Modal from "./Modal"

const AuthModal = () => {
    const supabaseClient = useSu
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