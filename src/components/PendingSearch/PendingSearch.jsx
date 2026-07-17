
import { useContext, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./PendingSearch.css";
import Fuse from "fuse.js";
import { CustomerContext } from "../Context/ClimberContext";
import CustomerCard from "../CustomerCard/CustomerCard";

const PendingSearch = ({ updateRecordSelected }) => {

    const { customerDataState, updateCustomerDataState } = useContext(CustomerContext)
    const [query, updateQuery] = useState("");

    const fuse = new Fuse(customerDataState, {
        keys: ["firstName", "lastName", "phoneNumber", "email"],
        threshold: .25,
        findAllMatches: true,
        useTokenSearch: true,
        tokenMatch: "all",
        includeScore: true
    });

    const results = query ? fuse.search(query) : [];

    return (
        <aside>
            <p>Search for an existing record or create a new one.</p>
            <Input value={query} onChange={(e) => updateQuery(e.target.value)} />
            <div>
                {results.map(customer => <CustomerCard key={customer.item.userId} docData={customer.item} updateRecordSelected={updateRecordSelected} hasOnClick />)}
            </div>
            <Button text="+ Create New Record" />
        </aside>
    )
}

export default PendingSearch;