
import "./Input.css";

const Input = ({ label, name, value, onChange, type = "text", placeholder = "", classes = "", required = false, bypassAsterisk = false, pattern }) => {

    const isControlled = value !== undefined && onChange !== undefined;
    const controlledProps = isControlled ? { value, onChange } : {};

    return (
        <label className={`input ${classes}`}>
            <span>
                {label}
                {required && !bypassAsterisk && <span className="required"> *</span>}
            </span>
            <input type={type} name={name} placeholder={placeholder} required={required} pattern={pattern} {...controlledProps} />
        </label>
    )
}

export default Input;