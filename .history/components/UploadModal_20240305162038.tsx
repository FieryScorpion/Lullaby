"use client";

import useUploadModal from "@/hooks/useUploadModal"

import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";

const UploadModal = () => {
    const [isLoading, setIsLoading] = useState(false);
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
    try {
        setIsLoading(true);

    } catch (error) {
        toast.error("Something went wrong");
    } finally {
        setIsLoading(false)
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
            className="flex flex-col gap-y-4"
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
                placeholder="Song author"
                />
                <div>
                    <div className ="pb-1">
                        Select a song File
                    </div>
                    <Input
                id="song"
                type="file"
                disabled={isLoading}
                accept=".mp3"
                {...register('song', { required: true})}
                />
                </div>
                <div>
                    <div className ="pb-1">
                        Select an Image
                    </div>
                    <Input
                id="image"
                type="file"
                disabled={isLoading}
                accept="image/*"
                {...register('image', { required: true})}
                />
                </div>
                <Button disabled={isLoading} type="submit">
                    Create
                </Button>
            </form>
        </Modal>
    );
}

export default UploadModal;
