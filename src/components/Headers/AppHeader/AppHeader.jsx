
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
                        <p>Gym Name Here</p>
                    </hgroup>
                </div>
                <nav>
                    <ul>
                        <NavbarLink imgUrl={testUrl} path="/dashboard" label="Dashboard" end>
                            
                        </NavbarLink>
                        <NavbarLink imgUrl={testUrl} path="/dashboard/checkin" label="Check-In" end>
                        </NavbarLink>
                        <NavbarLink imgUrl={testUrl} path="/dashboard/climbers" label="Climbers" end>
                        </NavbarLink>
                        <NavbarLink imgUrl={testUrl} path="/dashboard/pointofsale" label="Point of Sale" end>
                        </NavbarLink>
                        <NavbarLink imgUrl={testUrl} path="/dashboard/documents" label="Pending Documents" end>
                        </NavbarLink>
                        <NavbarLink imgUrl={testUrl} path="/dashboard/calendar" label="Calendar" end>
                        </NavbarLink>
                        <NavbarLink imgUrl={testUrl} path="/dashboard/settings" label="Settings" end>
                        </NavbarLink>
                    </ul>
                </nav>
                <div className="appheader-user">
                    <hgroup>
                        <h3>Front Desk</h3>
                        <p>Gym Name Here</p>
                    </hgroup>
                    <img src="https://www.stephencodes.com/launchcode/images/logo2.png" alt="logo" />
                </div>
            </header>
        </>
    )
}

export default AppHeader;