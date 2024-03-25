import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

Interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title
}
const Modal = () => {
    return (
        <div>
            Modal Component
        </div>
    );
}
export default Modal;
