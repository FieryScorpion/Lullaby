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
            flex
            w-full
            rounded-md
            bg-neutral-700
            border
            border-transparent

            `
            )}
            />
        )
    });

Input.displayName = "Input";
export default Input
