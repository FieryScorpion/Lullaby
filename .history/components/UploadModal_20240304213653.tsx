"use client";

import useUploadModal from "@/hooks/useUploadModal"

import Modal from "./Modal";
import { FieldValues, useForm } from "react-hook-form";

const UploadModal = () => {
    const uploadModal = useUploadModal();
    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null,
        }
        })

    const onChange = (open: boolean) => {
        if (!open) {
            reset();
            // Reset the form
            uploadModal.onClose();
    }
}

const onSubmit =() => {
    //Upload to supbase
}
    return (
        <Modal
        title="Add a song"
        description="Upload an mp3 file"
        isOpen={uploadModal.isOpen}
        onChange={onChange}
        >
            <form
            onSubmit={handleSubmit}
            >


            </form>
        </Modal>
    );
}

export default UploadModal;
