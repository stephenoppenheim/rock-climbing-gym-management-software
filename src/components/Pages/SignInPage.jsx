
import { Outlet } from "react-router";
import PublicHeader from "../Headers/PublicHeader/PublicHeader"
import SignIn from "../SignIn/SignIn"

const SignInPage = () => {
    return (
        <>
            <PublicHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default SignInPage;