
import { NavLink } from "react-router";
import "./NavbarLink.css";

const NavbarLink = ({ path, label, end, children }) => {
    return (
        <li className="navbarlink">
            <NavLink className="navlink" to={path} end={end}>
                {children}
                <span>{label}</span>
            </NavLink>
        </li>
    )
}

export default NavbarLink;