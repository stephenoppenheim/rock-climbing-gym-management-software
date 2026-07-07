import "./PublicHeader.css";

const PublicHeader = () => {
    return (
        <header>
            <div className="public-header-sign-in-branding">
                <img src="https://www.stephencodes.com/launchcode/images/logo2.png" alt="logo" />
                <h1>SUMMIT PRO</h1>
            </div>
            <div className="slogan-container">
                <h3>EVERY ROUTE</h3>
                <h3>EVERY MEMBER</h3>
                <h3>EVERY SEND</h3>
            </div>
            <div className="description-container">
                <p>The complete platform for climbing gyms:</p>
                <p>memberships, bookings, and analytics</p>
            </div>
        </header>
    )
}

export default PublicHeader;