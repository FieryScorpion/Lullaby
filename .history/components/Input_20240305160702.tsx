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
            px-3
            py-3
            text-sm
            file:border-0
            file:bg-transparent
            file:text-sm
            file:font-medium
            placeholder:text-neutral-400

            `
            )}
            />
        )
    });

Input.displayName = "Input";
export default Input
