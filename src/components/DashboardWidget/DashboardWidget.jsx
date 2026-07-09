
import "./DashboardWidget.css";

const DashboardWidget = ({ label, data, imgUrl, extraClasses }) => {
    return (
        <section className={`dashboardwidget ${extraClasses}`}>
            <div>
                <h3>{label}</h3>
                <img src={imgUrl} alt="" />
            </div>
            <p>{data}</p>
        </section>
    )
}

export default DashboardWidget;