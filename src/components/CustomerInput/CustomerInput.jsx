
import { useState } from "react";
import "./CustomerInput.css";
import Input from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import { useNavigate } from "react-router";

const CustomerInput = () => {

    const [formData, updateFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        birthMonth: "",
        birthDate: "",
        birthYear: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "United States",
        email: "",
        phoneNumber: "",
        eName: "",
        ePhoneNumber: ""
    });

    const isLeapYear = (year) => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;

    const getDayCount = (month) => {
        month = +month;
        const year = +formData.birthYear;
        if (month === 2) return isLeapYear(year) || !year ? 29 : 28;
        if ([4, 6, 9, 11].includes(month)) return 30;
        return 31;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const moveToAgreement = (event) => {
        event.preventDefault();
        sessionStorage.setItem("formData", JSON.stringify(formData));
        navigate("/agreement");
    }

    const navigate = useNavigate();
    const today = new Date();
    const curYear = today.getFullYear();
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayCount = getDayCount(formData.birthMonth);
    const dateArr = Array.from({ length: dayCount }, (_, i) => String(i + 1).padStart(2, "0"));
    const yearArr = Array.from({ length: curYear - 1900 }, (_, i) => String(curYear - i));

    return (
        <form className="customerinput">
            <fieldset>
                <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} type="text" required />
                <Input label="Middle Name" name="middleName" value={formData.middleName} onChange={handleChange} type="text" />
                <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} type="text" required />
            </fieldset>
            <fieldset>
                <label>
                    Date of Birth
                    <span className="required"> *</span>
                    <div>
                        <Dropdown text="Month" name="birthMonth" formData={formData} onChange={handleChange} arr={monthArr} />
                        <Dropdown text="Day" name="birthDate" formData={formData} onChange={handleChange} arr={dateArr} />
                        <Dropdown text="Year" name="birthYear" formData={formData} onChange={handleChange} arr={yearArr} />
                    </div>
                </label>
            </fieldset>
            <fieldset>
                <Input label="Address Line 1" name="addressLine1" value={formData.addressLine1} onChange={handleChange} type="text" required />
                <Input label="Address Line 2" name="addressLine2" value={formData.addressLine2} onChange={handleChange} type="text" />
                <div className="flex">
                    <Input label="City" name="city" value={formData.city} onChange={handleChange} type="text" required />
                    <Input label="State" name="state" value={formData.state} onChange={handleChange} type="text" required />
                    <Input label="Zip Code" name="zipCode" value={formData.zipCode} onChange={handleChange} type="text" inputmode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" required />
                </div>
            </fieldset>
            <fieldset>
                <Input label="Email" name="email" value={formData.email} onChange={handleChange} type="email" required />
                <Input label="Mobile Phone" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" inputmode="tel" required />
            </fieldset>
            <fieldset>
                <Input label="Emergency Contact Name" name="eName" value={formData.eName} onChange={handleChange} type="text" required />
                <Input label="Emergency Contact Phone #" name="ePhoneNumber" value={formData.ePhoneNumber} onChange={handleChange} type="tel" inputmode="tel" required />
            </fieldset>
            <Button type="submit" text="Continue" onClick={moveToAgreement} />
        </form>
    )
}
// classes, onClick, type = "button", text = "Click Me" }
export default CustomerInput