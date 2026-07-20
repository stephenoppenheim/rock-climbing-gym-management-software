
import { Outlet } from "react-router";
import PublicHeader from "../../Headers/PublicHeader/PublicHeader";
import SignIn from "../../SignIn/SignIn";
import "./SignInPage.css";
import Footer from "../../Footer/Footer";

const SignInPage = () => {

    const currentYear = new Date().getFullYear();
    return (
        <div className="signinpage">
            <PublicHeader />
            <main>
                <Outlet />
                <Footer />
            </main>
            
        </div>
    )
}

export default SignInPage;