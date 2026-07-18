
import { useContext } from "react";
import DashboardWidget from "../DashboardWidget/DashboardWidget";
import "./Dashboard.css";
import { CheckInContext } from "../Context/CheckInContext";
import { DocumentContext } from "../Context/DocumentContext";
import { CalendarCheck, FileClock, TriangleAlert, UserCheck, UserRoundCheck } from "lucide-react";

const Dashboard = ({ criticalIssueState, pendingDocumentsState }) => {

    const { checkInState } = useContext(CheckInContext);
    const { pendingDocuments, updatePendingDocuments } = useContext(DocumentContext);

    const widgetData = [
        {
            widget: {
                label: "TODAY'S CHECK\u2011INS",
                data: checkInState.length
            },
            svg: {
                Icon: UserCheck,
                classes: "dashboardwidget-icon usercheck"
            }
        },
        {
            widget: {
                label: "CRITICAL ISSUES",
                data: criticalIssueState.length
            },
            svg: {
                Icon: TriangleAlert,
                classes: "dashboardwidget-icon trianglealert"
            }
        },
        {
            widget: {
                label: "PENDING DOCUMENTS",
                data: pendingDocuments.length
            },
            svg: {
                Icon: FileClock,
                classes: "dashboardwidget-icon fileclock"
            }
        },
        {
            widget: {
                label: "EVENTS TODAY",
                data: 0
            },
            svg: {
                Icon: CalendarCheck,
                classes: "dashboardwidget-icon calendarcheck"
            }
        }
    ]

    return (
        <div className="dashboard">
            <section className="dashboard-staff-widgets">
                {widgetData.map((widget, i) => {
                    const widgetProps = widget.widget;
                    const { Icon, classes } = widget.svg;
                    return (
                        <DashboardWidget key={i} {...widgetProps}>
                            <Icon className={classes} />
                        </DashboardWidget>
                    )
                })}
            </section>
        </div>
    )
}

export default Dashboard;