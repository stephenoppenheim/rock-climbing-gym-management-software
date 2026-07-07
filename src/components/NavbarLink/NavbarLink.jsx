
import { NavLink } from "react-router"

const NavbarLink = ({ imgUrl, path, label, end}) => {
    return (
        <li>
            <img src={imgUrl} />
            <NavLink to={path} end={end}>{label}</NavLink>
        </li>
    )
}

export default NavbarLink;