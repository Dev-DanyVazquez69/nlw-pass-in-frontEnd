import { NavLink } from "./nav-link"

export const Header = () => {
    return(
        <div className="flex items-center gap-5 py-2">
            <img className="size-14" src="src/assets/logo.png"/>

            <nav className="flex items-center gap-5">
                <NavLink href="#">Eventos</NavLink>
                <NavLink href="#">Participantes</NavLink>
            </nav>
        </div>
    )
} 
