
import { NavLink } from "react-router";
import "./NavbarLink.css";

const NavbarLink = ({ imgUrl, path, label, end, children }) => {
    return (
        <li className="navbarlink">
            <NavLink className="navlink" to={path} end={end}>
                {children}
                {label}
            </NavLink>
        </li>
    )
}

export default NavbarLink;