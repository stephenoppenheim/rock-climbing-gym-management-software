
import { CalendarDays, FileText, LayoutPanelLeft, LogIn, Settings, ShoppingCart, Users } from "lucide-react";
import NavbarLink from "../../NavbarLink/NavbarLink";
import "./AppHeader.css";
import Hamburger from "../../Hamburger/Hamburger";
import { useEffect, useRef, useState } from "react";

const AppHeader = () => {

    const [menuState, updateMenuState] = useState("idle");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 575px)");
        const handleChange = () => updateMenuState("idle");
        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])
    

    return (
        <>
            <header className={`appheader ${menuState}`}>
                <div className="appheader-top">
                    <div className="appheader-sign-in-branding">
                        <img src="https://www.stephencodes.com/launchcode/images/logo2.png" alt="logo" />
                        <hgroup>
                            <h1>Summit Pro</h1>
                            <p>Movement</p>
                        </hgroup>
                    </div>
                    <Hamburger menuState={menuState} updateMenuState={updateMenuState} />
                </div>
                <nav>
                    <ul>
                        <NavbarLink path="/dashboard" label="Dashboard" end>
                            <LayoutPanelLeft className="appheader-img" />
                        </NavbarLink>
                        <NavbarLink path="/dashboard/checkin" label="Check-In" end>
                            <LogIn className="appheader-img" />
                        </NavbarLink>
                        <NavbarLink path="/dashboard/climbers" label="Climbers" end>
                            <Users className="appheader-img" />
                        </NavbarLink>
                        <NavbarLink path="/dashboard/pointofsale" label="Point of Sale" end>
                            <ShoppingCart className="appheader-img" />
                        </NavbarLink>
                        <NavbarLink path="/dashboard/documents" label="Pending Documents" end>
                            <FileText className="appheader-img" />
                        </NavbarLink>
                        <NavbarLink path="/dashboard/calendar" label="Calendar" end>
                            <CalendarDays className="appheader-img" />
                        </NavbarLink>
                        <NavbarLink path="/dashboard/settings" label="Settings" end>
                            <Settings className="appheader-img" />
                        </NavbarLink>
                    </ul>
                </nav>
                <div className="appheader-user">
                    <hgroup>
                        <h3>Front Desk</h3>
                        <p>Littleton Colorado</p>
                    </hgroup>
                </div>
            </header>
        </>
    )
}

export default AppHeader;