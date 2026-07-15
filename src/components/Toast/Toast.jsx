
import { useContext } from "react";
import Button from "../Button/Button";
import { ToastContext } from "../Context/ToastContext";
import "./Toast.css";

const Toast = () => {

    const { toastData, updateToastData } = useContext(ToastContext);

    const handleClose = () => {
        updateToastData({ isVisible: false, message: ""})
    }

    return !toastData.isVisible ? null : (
        <aside className="toast">
            <h3>Alert!</h3>
            <p>{toastData.message}</p>
            <Button text="Continue" onClick={handleClose} />
        </aside>
    )
}
// , onClick, type = "button", text = "Click Me"
export default Toast;