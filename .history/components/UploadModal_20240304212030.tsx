import useUploadModal from "@/hooks/useUploadModal"

import Modal from "./Modal";

const UploadModal = () => {


    return (
        <Modal
        title="Upload Modal title"
        description="Upload modal title"
        isOpen
        onChange={() => {}}
        >
            Upload Content
        </Modal>
    );
}

export default UploadModal;
