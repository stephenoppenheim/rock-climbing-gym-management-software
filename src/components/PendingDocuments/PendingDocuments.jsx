
import "./PendingDocuments.css";
import DocumentCard from "../DocumentCard/DocumentCard";
import { useContext } from "react";
import { DocumentContext } from "../Context/DocumentContext";

const PendingDocuments = () => {

    const { pendingDocuments, updatePendingDocuments } = useContext(DocumentContext);

    return (
        <>
            <h3>Pending Documents</h3>
            <section className="pendingdocuments-section">
                {pendingDocuments.map((docData, i) => <DocumentCard key={docData.pendingId} docData={docData} />)}
            </section>
            
        </>
    )
}

export default PendingDocuments;