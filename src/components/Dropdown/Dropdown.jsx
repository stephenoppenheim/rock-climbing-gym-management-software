
import "./Dropdown.css";

const Dropdown = ({ text, name, formData, onChange, arr }) => {
    return (
        <select name={name} value={formData[name]} onChange={onChange} required>
            <option value="">{text}</option>
            {arr.map(mapFunctions[name])}
        </select>
    )
}

const mapFunctions = {
    birthMonth: (month, i) => <option key={i} value={String(i + 1).padStart(2, "0")}>{month}</option>,
    birthDate: (date, i) => <option key={i} value={date}>{date}</option>,
    birthYear: (year, i) => <option key={i} value={year}>{year}</option>
}

export default Dropdown;