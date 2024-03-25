import { forwardRef } from "react";

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

    const Input = forwardRef<HTMLInputElement, InputProps>(({
        classname,
        propTypes,
        disabled

    }));

Input.displayName = "Input";
export default Input
