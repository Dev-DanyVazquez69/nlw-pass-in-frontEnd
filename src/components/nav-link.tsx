import { ComponentProps } from "react"

interface navLinkProps extends ComponentProps<'a'> {
    children: string
}

export const NavLink = (props:navLinkProps) => {
    return(
        <a {...props} className="font-medium text-sm">{props.children}</a>
    )
}