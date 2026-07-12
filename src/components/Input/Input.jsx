
import "./Input.css";

const Input = ({ label, type = "text", name, placeholder, required = false, value, onChange }) => {

    const isControlled = value !== undefined && onChange !== undefined;
    const controlledProps = isControlled ? { value, onChange } : {};

    return (
        <label>
            {label && <span>{label}</span>}
            <input type={type} name={name} placeholder={placeholder} required={required} {...controlledProps}/>
        </label>
    )
}

export default Input;