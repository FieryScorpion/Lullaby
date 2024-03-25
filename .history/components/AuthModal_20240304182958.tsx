"use client";

import Modal from "./Modal"

const AuthModal = () => {
    return (
        <Modal
        title="Welcome back!"
        description="Login to your account"
        isOpen
        OnChange={() =>  ()}
        >
            Auth modal children!
        </Modal>
    );
}
export default AuthModal;
