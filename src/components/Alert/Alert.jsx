
import { useContext } from "react";
import Button from "../Button/Button";
import { AlertContext } from "../Context/AlertContext";
import "./Alert.css";

const Alert = () => {

    const { alertData, updateAlertData } = useContext(AlertContext);

    const handleClose = () => {
        updateAlertData({ isVisible: false, message: ""})
    }

    return !alertData.isVisible ? null : (
        <aside className="alert">
            <h3>Alert!</h3>
            <p>{alertData.message}</p>
            <Button text="Continue" onClick={handleClose} />
        </aside>
    )
}
// , onClick, type = "button", text = "Click Me"
export default Alert;