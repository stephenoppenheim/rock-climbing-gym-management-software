
import { useContext } from "react";
import "./CustomerCard.css";
import { CustomerContext } from "../Context/ClimberContext";

const CustomerCard = ({ customerId, docData, updateRecordSelected, hasOnClick }) => {

    const { customerDataState } = useContext(CustomerContext);

    // Construct full name removing any empty fields
    const { firstName, middleName, lastName } = docData;
    const fullName = [firstName, middleName, lastName].map(name => name.trim()).filter(Boolean).join(" ");

    // Construct birthdate and format MM-DD-YYYY
    const [birthYear, birthMonth, birthDate] = docData.birthDate.split("-");
    const formattedBirthdate = `${birthMonth}-${birthDate}-${birthYear}`;

    // Find matching customer record from global state
    const customerRecord = customerDataState.find(customer => customer.userId === customerId)

    return (
        <article className="customercard" onClick={hasOnClick ? () => updateRecordSelected(customerRecord) : undefined}>
            <h3 className="cc-dmb">{fullName}</h3>
            <p className="cc-mono">{}</p>
        </article>
    )
}

export default CustomerCard;