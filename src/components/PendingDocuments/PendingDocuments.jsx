
import "./PendingDocuments.css";
import DocumentCard from "../DocumentCard/DocumentCard";
import { useContext, useState } from "react";
import { DocumentContext } from "../Context/DocumentContext";
import AssignDoc from "../AssignDoc/AssignDoc";

const PendingDocuments = () => {

    const { pendingDocuments, updatePendingDocuments } = useContext(DocumentContext);
    const [curDoc, updateCurDoc] = useState("");

    return (
        <div>
            <section className="pendingdocuments-section">
                {pendingDocuments.map((docData, i) => <DocumentCard id={docData.pendingId} key={docData.pendingId} docData={docData} updateCurDoc={updateCurDoc}/>)}
            </section>
            {curDoc && <AssignDoc doc={curDoc} updateCurDoc={updateCurDoc} />}
        </div>
    )
}

export default PendingDocuments;