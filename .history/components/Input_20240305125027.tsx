import { forwardRef } from "react";

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

    const Input = forwardRef<HTMLInputElement, InputProps>(({
        className,
        types,
        disabled,
        ...props

    }, ref) => {
        return(
            <input />
        )
    });

Input.displayName = "Input";
export default Input
