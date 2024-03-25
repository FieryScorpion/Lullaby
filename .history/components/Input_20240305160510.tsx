import { forwardRef } from "react";

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

    const Input = forwardRef<HTMLInputElement, InputProps>(({
        className,
        type,
        disabled,
        ...props

    }, ref) => {
        return(
            <input
            type={type}
            className={twMerge(`
            `flex
            )}
            />
        )
    });

Input.displayName = "Input";
export default Input
