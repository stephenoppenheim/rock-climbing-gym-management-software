
import "./DashboardWidget.css";

const DashboardWidget = ({ label, data, imgUrl, extraClasses, children }) => {
    return (
        <section className={`dashboardwidget ${extraClasses}`}>
            <div>
                <div>
                    <h3>{label}</h3>
                </div>
                {children}
            </div>
            <p>{data}</p>
        </section>
    )
}

export default DashboardWidget;