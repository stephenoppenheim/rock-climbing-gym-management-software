
import { useContext } from "react";
import "./CustomerCard.css";
import { CustomerContext } from "../Context/ClimberContext";

const CustomerCard = ({ customerId, docData, updateRecordSelected, hasOnClick }) => {

    const { customerDataState } = useContext(CustomerContext);

    const { firstName, middleName, lastName } = docData;
    const fullName = [firstName, middleName, lastName].map(name => name.trim()).filter(Boolean).join(" ");
    const [birthYear, birthMonth, birthDate] = docData.birthDate.split("-");
    const customerRecord = customerDataState.find(customer => customer.userId === customerId)

    return (
        <article className="customercard" onClick={hasOnClick ? () => updateRecordSelected(customerRecord) : undefined}>
            <h3 className="cc-dmb">{fullName}</h3>
            <p className="cc-mono">{`${birthMonth}-${birthDate}-${birthYear}`}</p>
        </article>
    )
}

export default CustomerCard;