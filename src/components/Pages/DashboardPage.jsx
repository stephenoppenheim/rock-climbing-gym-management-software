
import { Outlet } from "react-router";
import AppHeader from "../Headers/AppHeader/AppHeader";

const DashboardPage = () => {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DashboardPage;