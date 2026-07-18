
import { Outlet } from "react-router";
import PublicHeader from "../../Headers/PublicHeader/PublicHeader";
import SignIn from "../../SignIn/SignIn";
import "./SignInPage.css";

const SignInPage = () => {
    return (
        <div className="signinpage">
            <PublicHeader />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default SignInPage;