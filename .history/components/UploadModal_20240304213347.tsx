"use client";

import useUploadModal from "@/hooks/useUploadModal"

import Modal from "./Modal";
import { FieldValues, useForm } from "react-hook-form";

const UploadModal = () => {
    const uploadModal = useUploadModal();
    const {} = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            
    })
    const onChange = (open: boolean) => {
        if (!open) {
            // Reset the form
            uploadModal.onClose();
    }
}
    return (
        <Modal
        title="Add a song"
        description="Upload an mp3 file"
        isOpen={uploadModal.isOpen}
        onChange={onChange}
        >
            Form
        </Modal>
    );
}

export default UploadModal;
