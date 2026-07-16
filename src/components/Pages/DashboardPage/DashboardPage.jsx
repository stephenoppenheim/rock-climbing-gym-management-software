
import { Outlet } from "react-router";
import AppHeader from "../../Headers/AppHeader/AppHeader";
import "./DashboardPage.css";

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