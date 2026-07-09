
import { useContext } from "react";
import DashboardWidget from "../DashboardWidget/DashboardWidget";
import "./Dashboard.css";
import { CheckInContext } from "../Context/CheckInContext";

const Dashboard = ({ criticalIssueState, pendingDocumentsState }) => {

    const { checkInState } = useContext(CheckInContext);

    return (
        <>
            <h2>Dashboard</h2>
            <section className="dashboard-staff-widgets">
                <DashboardWidget label="TODAY'S CHECK-INS" data={checkInState.length} />
                <DashboardWidget label="CRITICAL ISSUES" data={criticalIssueState.length} />
                <DashboardWidget label="PENDING DOCUMENTS" data={pendingDocumentsState.length} />
                <DashboardWidget label="EVENTS TODAY" data="0" />
            </section>
        </>
        
    )
}

export default Dashboard;