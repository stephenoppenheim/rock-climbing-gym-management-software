
import { useState } from "react";
import CustomerSearch from "../CustomerSearch/CustomerSearch";
import PendingSearch from "../PendingSearch/PendingSearch";
import "./AssignDoc.css";
import PendingAssign from "../PendingAssign/PendingAssign";

const AssignDoc = ({ doc, updateCurDoc }) => {

    const [recordSelected, updateRecordSelected] = useState(null);
    const { firstName, middleName, lastName } = doc;
    const fullName = [firstName, middleName, lastName].map(name => name.trim()).filter(Boolean).join(" ");
    const [birthYear, birthMonth, birthDate] = doc.birthDate.split("-");

    return (
        <article className="assign">
            <header>
                <h3>Attach {doc.type} to Record</h3>
                <div>
                    <h4>{fullName}</h4>
                    <p>{`${birthMonth}-${birthDate}-${birthYear}`}</p>
                </div>
            </header>
            {!recordSelected && <PendingSearch 
                                    updateRecordSelected={updateRecordSelected}
                                    doc={doc}
                                    updateCurDoc={updateCurDoc}
                                />}
            {recordSelected && <PendingAssign
                                   doc={doc}
                                   record={recordSelected}
                                   updateRecordSelected={updateRecordSelected}
                                   updateCurDoc={updateCurDoc}
                               />}
        </article>
    )
}

export default AssignDoc;