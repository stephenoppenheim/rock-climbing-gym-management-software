
import CustomerSearch from "../CustomerSearch/CustomerSearch";
import PendingSearch from "../PendingSearch/PendingSearch";
import "./AssignDoc.css";
import PendingAssign from "../PendingAssign/PendingAssign";
import CustomerCard from "../CustomerCard/CustomerCard";

const AssignDoc = ({ doc, updateCurDoc, recordSelected, updateRecordSelected, exitSidebar }) => {

    const { firstName, middleName, lastName } = doc;
    const fullName = [firstName, middleName, lastName].map(name => name.trim()).filter(Boolean).join(" ");
    const [birthYear, birthMonth, birthDate] = doc.birthDate.split("-");

    return (
        <>  
            <div className="adcc-container">
                <CustomerCard docData={doc}/>
            </div>
            
            {!recordSelected && <PendingSearch 
                                    updateRecordSelected={updateRecordSelected}
                                    doc={doc}
                                    updateCurDoc={updateCurDoc}
                                    exitSidebar={exitSidebar}
                                />}
            {recordSelected && <PendingAssign
                                   doc={doc}
                                   record={recordSelected}
                                   updateRecordSelected={updateRecordSelected}
                                   updateCurDoc={updateCurDoc}
                                   exitSidebar={exitSidebar}
                               />}
        </>
    )
}

export default AssignDoc;