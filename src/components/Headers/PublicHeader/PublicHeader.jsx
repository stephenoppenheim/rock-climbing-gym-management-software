import "./PublicHeader.css";

const PublicHeader = () => {
    return (
        <header className="publicheader">
            <img className="publicheader-bg-img" src="https://www.stephencodes.com/launchcode/images/phbg.avif" alt="Background image of woman climbing" />
            <div className="publicheader-sign-in-branding">
                <img src="https://www.stephencodes.com/launchcode/images/logo2.png" alt="main logo" />
                <h1>SUMMIT PRO</h1>
            </div>
            <div className="publicheader-bottom-text">
                <div className="publicheader-slogan-container">
                    <h3>EVERY ROUTE</h3>
                    <h3>EVERY MEMBER</h3>
                    <h3>EVERY SEND</h3>
                </div>
                <div className="publicheader-description-container">
                    <p>The complete platform for climbing gyms:</p>
                    <p>memberships, bookings, and analytics</p>
                </div>
            </div>
        </header>
    )
}

export default PublicHeader;