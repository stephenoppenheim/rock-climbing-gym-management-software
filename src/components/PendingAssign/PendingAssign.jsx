
import { useContext } from "react";
import Button from "../Button/Button";
import CustomerCard from "../CustomerCard/CustomerCard";
import "./PendingAssign.css";
import { CustomerContext } from "../Context/ClimberContext";
import { DocumentContext } from "../Context/DocumentContext";
import { getExpirationDate, updateState } from "../../utils/helpers";
import pendingDocumentsInitialState from "../PendingDocuments/pendingDocuments.initialState.js";

const PendingAssign = ({ type, doc, record, updateRecordSelected, updateCurDoc, exitSidebar }) => {

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
        updateState(updateCustomerDataState, "userId", record.userId, "update", updatedRecord);
        updateState(updatePendingDocuments, "pendingId", doc.pendingId);
        exitSidebar()
    }

    return (
        <section className="pendingassign">
            <p>The {doc.type.toLowerCase()} will be attached to this record.</p>
            <CustomerCard docData={record} updateRecordSelected={updateRecordSelected} />
            <div>
                <Button text="Back" onClick={() => updateRecordSelected(null)} />
                <Button text="Confirm & Link" onClick={attachDoc} />
            </div>
        </section>
    )
}

export default PendingAssign;