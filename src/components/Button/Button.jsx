
import "./Button.css";

const Button = ({ classes = "", onClick, type = "button", text = "Click Me" }) => {
    return (
        <button type={type} className={`button ${classes}`} onClick={onClick}>{text}</button>
    )
}

export default Button;