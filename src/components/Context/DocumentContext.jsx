
import { createContext, useState } from "react";
import pendingDocumentsData from "../../assets/pending-documents-data.json";

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {

    const [pendingDocuments, updatePendingDocuments] = useState(pendingDocumentsData);

    return (
        <DocumentContext.Provider value={{ pendingDocuments, updatePendingDocuments }}>
            {children}
        </DocumentContext.Provider>
    )
}