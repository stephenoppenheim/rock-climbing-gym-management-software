
import { Outlet, useLocation } from "react-router";
import AppHeader from "../../Headers/AppHeader/AppHeader";
import "./DashboardPage.css";
import { useState } from "react";

const today = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    }).format(today);

const DashboardPage = () => {

    const routeTitles = {
        "/dashboard": "Dashboard",
        "/dashboard/": "Dashboard",
        "/dashboard/checkin": "Check-In",
        "/dashboard/checkin/": "Check-In",
        "/dashboard/climbers": "Climbers",
        "/dashboard/climbers/": "Climbers",
        "/dashboard/pointofsale": "Point Of Sale",
        "/dashboard/pointofsale/": "Point Of Sale",
        "/dashboard/documents": "Pending Documents",
         "/dashboard/documents/": "Pending Documents",
        "/dashboard/calendar": "Calendar",
        "/dashboard/calendar/": "Calendar",
        "/dashboard/settings": "Settings",
        "/dashboard/settings/": "Settings"
    }

    const curLocation = useLocation();
    const curTitle = routeTitles[curLocation.pathname];

    return (
        <>
            <AppHeader />
            <div className="dashboardpage-spacer"></div>
            <main className="dashboardpage">
                <div className="dashboardpage-title">
                    <h2>{curTitle}</h2>
                    <p>{formattedDate}</p>
                </div>
                <Outlet />
            </main>
        </>
    )
}

export default DashboardPage;