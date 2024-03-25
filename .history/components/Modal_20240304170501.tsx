import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode;
}
const Modal: React.FC<ModalProps = () => {
    return (
        <div>
            Modal Component
        </div>
    );
}
export default Modal;
