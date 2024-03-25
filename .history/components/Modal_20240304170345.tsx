import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

Interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: Rea
}
const Modal = () => {
    return (
        <div>
            Modal Component
        </div>
    );
}
export default Modal;
