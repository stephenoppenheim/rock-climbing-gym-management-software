
import { useContext } from "react";
import Button from "../Button/Button";
import { AlertContext } from "../Context/AlertContext";
import "./Alert.css";

const Alert = ({ callback }) => {

    const { alertData, updateAlertData } = useContext(AlertContext);

    const handleClose = (cb) => {
        if (cb) cb()
        updateAlertData({ isVisible: false, message: ""})
    }

    return !alertData.isVisible ? null : (
        <aside className="alert">
            <h3>Alert!</h3>
            <p>{alertData.message}</p>
            <Button text="Continue" onClick={() => handleClose(callback)} />
        </aside>
    )
}

export default Alert;