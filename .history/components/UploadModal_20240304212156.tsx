"use client";

import useUploadModal from "@/hooks/useUploadModal"

import Modal from "./Modal";

const UploadModal = () => {
    const uploadModal = useUploadModal();
    const onChange = (open: boolean) => {
        if (!open) {
            
    }
    return (
        <Modal
        title="Upload Modal title"
        description="Upload modal title"
        isOpen={uploadModal.isOpen}
        onChange={() => {}}
        >
            Upload Content
        </Modal>
    );
}

export default UploadModal;
