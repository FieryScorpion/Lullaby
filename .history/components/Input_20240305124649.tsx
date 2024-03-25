import { forwardRef } from "react";

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

    const Input = forwardRef<HTMLInputElement, InputProps>(({
        classname,
        propTypes,
        disabled,
        ...props

    }, ref) => {});

Input.displayName = "Input";
export default Input
