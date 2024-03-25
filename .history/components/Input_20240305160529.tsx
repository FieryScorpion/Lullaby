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
            bg-neutral

            `
            )}
            />
        )
    });

Input.displayName = "Input";
export default Input
