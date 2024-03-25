"use client";

import useUploadModal from "@/hooks/useUploadModal"

import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";

const UploadModal = () => {
    const [isLoading, setIsLoading] = useState();
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

const onSubmit: SubmitHandler<FieldValues> = async (values) => {
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
            onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                id="title"
                disabled={isLoading}
                {...register('title', { required: true})}
                placeholder="Song title"
                />
                <Input
                id="author"
                disabled={isLoading}
                {...register('author', { required: true})}
                placeholder="Song title"
                />
            </form>
        </Modal>
    );
}

export default UploadModal;
