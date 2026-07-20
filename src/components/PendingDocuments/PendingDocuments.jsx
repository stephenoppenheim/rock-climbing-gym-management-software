
import "./PendingDocuments.css";
import DocumentCard from "../DocumentCard/DocumentCard";
import { useContext, useEffect, useRef, useState } from "react";
import { DocumentContext } from "../Context/DocumentContext";
import AssignDoc from "../AssignDoc/AssignDoc";
import Table from "../Table/Table";
import Button from "../Button/Button";
import RightSideBar from "../RightSideBar/RightSideBar";
import pendingDocumentsInitialState from "./pendingDocuments.initialState.js";
import { QueryContext } from "../Context/QueryContext.jsx";

const PendingDocuments = () => {

    const [sidebarOpen, updateSidebarOpen] = useState("closed");
    const [curDoc, updateCurDoc] = useState(pendingDocumentsInitialState);
    const [recordSelected, updateRecordSelected] = useState(null);
    const { pendingDocuments, updatePendingDocuments } = useContext(DocumentContext);
    const { query, updateQuery } = useContext(QueryContext);
    useEffect(() => updateQuery(""), []);

    const onClick = (doc) => {
        updateCurDoc(doc);
        updateSidebarOpen("open");
    }

    const exitSidebar = () => {
        updateQuery("");
        updateSidebarOpen("closed");
        setTimeout(() => {
            updateCurDoc(pendingDocumentsInitialState);
            updateRecordSelected(null);
        }, 300);
    }

    const tableProps = {
        headers: ["", "Name", "Time", ""],
        tableData: pendingDocuments,
        tableDataMap: pendingDocsMap,
        onClick: onClick
    }

    return (
        <div className="pendingdocuments">
            <section className="pendingdocuments-section">
                <Table {...tableProps} />
            </section>
            <RightSideBar 
                title={`Attach ${curDoc.type} to Record`}
                sidebarOpen={sidebarOpen}
                updateSidebarOpen={updateSidebarOpen}
                onClick={exitSidebar}
            >
                <AssignDoc 
                    doc={curDoc}
                    updateCurDoc={updateCurDoc}
                    recordSelected={recordSelected}
                    updateRecordSelected={updateRecordSelected}
                    exitSidebar={exitSidebar}
                />
            </RightSideBar>
        </div>
    )
}

const pendingDocsMap = (docData, updateCurDoc) => {

    const { firstName, middleName, lastName } = docData;
    const fullName = [firstName, middleName, lastName].map(name => name.trim()).filter(Boolean).join(" ");
    const docDate = new Date(docData.dateTime);
    const isToday = new Date().toLocaleDateString("en-US") === docDate.toLocaleDateString("en-US");
    const dateTimeOptions = isToday ? { hour: "2-digit", minute: "2-digit" } : { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
    const localDateTime = `${isToday ? "Today, " : ""}${new Date(docData.dateTime).toLocaleString("en-US", dateTimeOptions)}`;

    return (
        <tr key={docData.pendingId}>
            <td></td>
            <td>
                <div className="table-name-member">
                    <span className="table-name">{fullName}</span>
                    <span className="table-member">{docData.type}</span>
                </div>
            </td>
            <td className="table-time">{localDateTime}</td>
            <td>
                <Button text="Attach to Record" onClick={() => updateCurDoc(docData)} />
            </td>
        </tr>
    )
}

export default PendingDocuments;