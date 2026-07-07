
import NavbarLink from "../../NavbarLink/NavbarLink";
import "./AppHeader.css";
// const NavbarLink = ({ imgUrl, path, label, end}) => {
const AppHeader = () => {

    const testUrl = "https://www.stephencodes.com/launchcode/images/logo2.png";
    return (
        <>
            <header>
                <div className="app-header-sign-in-branding">
                    <img src="https://www.stephencodes.com/launchcode/images/logo2.png" alt="logo" />
                    <hgroup>
                        <h1>Summit Pro</h1>
                        <p>Gym Name Here</p>
                    </hgroup>
                    <nav>
                        <ul>
                            <NavbarLink imgUrl={testUrl} path="/dashboard" label="Dashboard" end/>
                            <NavbarLink imgUrl={testUrl} path="/dashboard/checkin" label="Check-In" end/>
                            <NavbarLink imgUrl={testUrl} path="/dashboard/members" label="Members" end/>
                            <NavbarLink imgUrl={testUrl} path="/dashboard/documents" label="Pending Documents" end/>
                            <NavbarLink imgUrl={testUrl} path="/dashboard/pointofsale" label="Point of Sale" end/>
                            <NavbarLink imgUrl={testUrl} path="/dashboard/calendar" label="Calendar" end/>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default AppHeader;