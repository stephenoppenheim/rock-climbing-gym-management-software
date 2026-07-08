
import { NavLink } from "react-router";
import "./NavbarLink.css";

const NavbarLink = ({ imgUrl, path, label, end}) => {
    return (
        <li className="navbarlink-list">
            <img src={imgUrl} />
            <NavLink to={path} end={end}>{label}</NavLink>
        </li>
    )
}

export default NavbarLink;