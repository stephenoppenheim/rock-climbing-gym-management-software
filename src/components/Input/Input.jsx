
import "./Input.css";

const Input = ({ label, type = "text", name, placeholder, required = false }) => {
    return (
        <label>
            <span>{label}</span>
            <input type={type} name={name} required={required} />
        </label>
    )
}

export default Input;