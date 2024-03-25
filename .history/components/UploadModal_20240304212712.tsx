"use client";

import useUploadModal from "@/hooks/useUploadModal"

import Modal from "./Modal";

const UploadModal = () => {
    const uploadModal = useUploadModal();
    const onChange = (open: boolean) => {
        if (!open) {
            // Reset the form
            uploadModal.onClose();
    }
}
    return (
        <Modal
        title="Add a song"
        description="Uploa"
        isOpen={uploadModal.isOpen}
        onChange={onChange}
        >
            Upload Content
        </Modal>
    );
}

export default UploadModal;
