
import { Outlet, useLocation } from "react-router";
import AppHeader from "../../Headers/AppHeader/AppHeader";
import "./DashboardPage.css";
import { useState } from "react";

const DashboardPage = () => {

    const routeTitles = {
        "/dashboard": "Dashboard",
        "/dashboard/checkin": "Check-In",
        "/dashboard/climbers": "Climbers",
        "/dashboard/pointofsale": "Point Of Sale",
        "/dashboard/documents": "Pending Documents",
        "/dashboard/calendar": "Calendar",
        "/dashboard/settings": "Settings"
    }

    const curLocation = useLocation();
    const curTitle = routeTitles[location.pathname];

    return (
        <>
            <AppHeader />
            <div className="dashboardpage-spacer"></div>
            <main className="dashboardpage">
                <h2>{curTitle}</h2>
                <Outlet />
            </main>
        </>
    )
}

export default DashboardPage;