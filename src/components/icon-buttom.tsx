import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtomProps extends ComponentProps<'button'> {
    transparent?: boolean
}

export const IconButtom = ({ transparent, ...props }: IconButtomProps) => {
    return (
        <button {...props} className={
            twMerge(
                'border border-white/10 rounded-md p-1.5',
                transparent ? 'bg-black/20' : 'bg-white/10',
                props.disabled ? 'opacity-50' : null
            )
        } />
    )
}