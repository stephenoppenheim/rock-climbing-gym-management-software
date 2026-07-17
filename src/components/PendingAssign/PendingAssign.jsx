
import { useContext } from "react";
import Button from "../Button/Button";
import CustomerCard from "../CustomerCard/CustomerCard";
import "./PendingAssign.css";
import { CustomerContext } from "../Context/ClimberContext";
import { DocumentContext } from "../Context/DocumentContext";

export const updateState = (setState, key, id, updatedRecord) => {
    setState(prev =>
        updatedRecord ?
            prev.map(user => user[key] === id ? updatedRecord : user) :
            prev.filter(document => document[key] !== id)
    )
}

const PendingAssign = ({ type, doc, record, updateRecordSelected, updateCurDoc }) => {

    const { customerDataState, updateCustomerDataState } = useContext(CustomerContext);
    const { pendingDocuments, updatePendingDocuments } = useContext(DocumentContext);

    const attachDoc = () => {
        const updatedRecord = {};
        for (let key of Object.keys(record)) updatedRecord[key] = Object.hasOwn(doc, key) ? doc[key] : record[key];
        const today = new Date();
        today.setFullYear(today.getFullYear() + 2);
        today.setUTCHours(0, 0, 0, 0);
        const expiration = today.toISOString();
        updatedRecord.status = 0;
        updatedRecord.waiverExpirationDate = expiration;
        updatedRecord.hasWaiver = true;
        updateState(updateCustomerDataState, "userId", record.userId, updatedRecord);
        updateState(updatePendingDocuments, "pendingId", doc.pendingId);
        updateRecordSelected(null);
        updateCurDoc(null)
    }

    return (
        <aside>
            <p>The {type.toLowerCase()} will be attached to this record.</p>
            <CustomerCard docData={doc} updateRecordSelected={updateRecordSelected} />
            <div>
                <Button text="Back" onClick={() => updateRecordSelected(null)} />
                <Button text="Confirm & Link" onClick={attachDoc} />
            </div>
        </aside>
    )
}
// classes, onClick, type = "button", text = "Click Me"
export default PendingAssign;