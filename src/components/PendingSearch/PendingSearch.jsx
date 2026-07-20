
import { useContext, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./PendingSearch.css";
import Fuse from "fuse.js";
import { CustomerContext } from "../Context/ClimberContext";
import CustomerCard from "../CustomerCard/CustomerCard";
import { getExpirationDate, updateState } from "../../utils/helpers";
import { DocumentContext } from "../Context/DocumentContext";
import { QueryContext } from "../Context/QueryContext";
import pendingDocumentsInitialState from "../PendingDocuments/pendingDocuments.initialState.js";

const PendingSearch = ({ updateRecordSelected, doc, updateCurDoc, exitSidebar }) => {

    const { customerDataState, updateCustomerDataState } = useContext(CustomerContext);
    const { pendingDocuments, updatePendingDocuments } = useContext(DocumentContext);
    const { query, updateQuery } = useContext(QueryContext);

    const fuse = new Fuse(customerDataState, {
        keys: ["firstName", "lastName", "phoneNumber", "email"],
        threshold: .25,
        findAllMatches: true,
        useTokenSearch: true,
        tokenMatch: "all",
        includeScore: true
    });

    const results = query ? fuse.search(query) : [];

    const addNewRecord = () => {
        const newRecord = {};
        const keys = ["firstName", "middleName", "lastName", "phoneNumber", "birthDate", "addressLine1", "addressLine2", "city", "state", "zipCode", "country", "email"]
        for (let key of keys) {
            newRecord[key] = doc[key] ?? "";
        }
        newRecord.userId = crypto.randomUUID();
        newRecord.hasWaiver = true;
        newRecord.waiverExpirationDate = getExpirationDate();
        newRecord.status = 0;
        newRecord.member = false;
        updateState(updateCustomerDataState, null, null, "add", newRecord);
        updateState(updatePendingDocuments, "pendingId", doc.pendingId);
        updateRecordSelected(null);
        updateCurDoc(pendingDocumentsInitialState);
        exitSidebar()
    }

    return (
        <section className="pendingsearch">
            <p>Search for an existing record or create a new one.</p>
            <Input
                value={query}
                onChange={(e) => updateQuery(e.target.value)}
                placeholder="Alex Honnold..."
            />
            <div className="pendingsearch-cards">
                {results.map(customer => (
                    <CustomerCard
                        key={customer.item.userId}
                        customerId={customer.item.userId}
                        docData={customer.item}
                        updateRecordSelected={updateRecordSelected}
                        hasOnClick
                    />
                ))}
            </div>
            <Button text="+ Create New Record" onClick={addNewRecord} />
        </section>
    )
}

export default PendingSearch;