
import DashboardWidget from "../DashboardWidget/DashboardWidget";
import "./Dashboard.css";
// label, data, imgUrl, extraClasses
const Dashboard = () => {
    return (
        <>
            <h2>Dashboard</h2>
            <section className="dashboard-staff-widgets">
                <DashboardWidget />
                <DashboardWidget />
                <DashboardWidget />
                <DashboardWidget />
            </section>
        </>
        
    )
}

export default Dashboard;