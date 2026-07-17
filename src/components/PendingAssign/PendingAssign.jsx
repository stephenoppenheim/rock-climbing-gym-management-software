
import { useContext } from "react";
import Button from "../Button/Button";
import CustomerCard from "../CustomerCard/CustomerCard";
import "./PendingAssign.css";
import { CustomerContext } from "../Context/ClimberContext";
import { DocumentContext } from "../Context/DocumentContext";
import { getExpirationDate, updateState } from "../../utils/helpers";

const PendingAssign = ({ type, doc, record, updateRecordSelected, updateCurDoc }) => {

    const { customerDataState, updateCustomerDataState } = useContext(CustomerContext);
    const { pendingDocuments, updatePendingDocuments } = useContext(DocumentContext);

    const attachDoc = () => {
        const updatedRecord = {};
        for (let key of Object.keys(record)) {
            updatedRecord[key] = (Object.hasOwn(doc, key) ? doc[key] : record[key]) ?? "";
        }
        updatedRecord.status = 0;
        updatedRecord.waiverExpirationDate = getExpirationDate();
        updatedRecord.hasWaiver = true;
        updateState(updateCustomerDataState, "userId", record.userId, updatedRecord);
        updateState(updatePendingDocuments, "pendingId", doc.pendingId);
        updateRecordSelected(null);
        updateCurDoc(null)
    }

    return (
        <aside>
            <p>The {doc.type.toLowerCase()} will be attached to this record.</p>
            <CustomerCard docData={doc} updateRecordSelected={updateRecordSelected} />
            <div>
                <Button text="Back" onClick={() => updateRecordSelected(null)} />
                <Button text="Confirm & Link" onClick={attachDoc} />
            </div>
        </aside>
    )
}

export default PendingAssign;