
import "./Button.css";

const Button = ({ classes = "", onClick, type = "button", text }) => {
    return (
        <button type={type} className={`button ${classes}`} onClick={onClick}>{text}</button>
    )
}

export default Button;