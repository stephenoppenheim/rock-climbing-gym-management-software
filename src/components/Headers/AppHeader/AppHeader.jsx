
import { CalendarDays, FileText, LayoutPanelLeft, LogIn, Settings, ShoppingCart, Users } from "lucide-react";
import NavbarLink from "../../NavbarLink/NavbarLink";
import "./AppHeader.css";
// const NavbarLink = ({ imgUrl, path, label, end}) => {
const AppHeader = () => {

    const testUrl = "https://www.stephencodes.com/launchcode/images/logo2.png";
    return (
        <>
            <header className="appheader">
                <div className="appheader-sign-in-branding">
                    <img src="https://www.stephencodes.com/launchcode/images/logo2.png" alt="logo" />
                    <hgroup>
                        <h1>Summit Pro</h1>
                        <p>Movement</p>
                    </hgroup>
                </div>
                <nav>
                    <ul>
                        <NavbarLink imgUrl={testUrl} path="/dashboard" label="Dashboard" end>
                            <LayoutPanelLeft className="appheader-img" />
                        </NavbarLink>
                        <NavbarLink imgUrl={testUrl} path="/dashboard/checkin" label="Check-In" end>
                            <LogIn className="appheader-img" />
                        </NavbarLink>
                        <NavbarLink imgUrl={testUrl} path="/dashboard/climbers" label="Climbers" end>
                            <Users className="appheader-img" />
                        </NavbarLink>
                        <NavbarLink imgUrl={testUrl} path="/dashboard/pointofsale" label="Point of Sale" end>
                            <ShoppingCart className="appheader-img" />
                        </NavbarLink>
                        <NavbarLink imgUrl={testUrl} path="/dashboard/documents" label="Pending Documents" end>
                            <FileText className="appheader-img" />
                        </NavbarLink>
                        <NavbarLink imgUrl={testUrl} path="/dashboard/calendar" label="Calendar" end>
                            <CalendarDays className="appheader-img" />
                        </NavbarLink>
                        <NavbarLink imgUrl={testUrl} path="/dashboard/settings" label="Settings" end>
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