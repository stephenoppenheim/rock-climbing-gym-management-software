
import { useContext, useState } from "react";
import Input from "../Input/Input";
import customerData from "../../assets/customer-data.json";
import issueList from "../../assets/issue-list.json";
import "./CustomerSearch.css";
import Fuse from "fuse.js";
import { CheckInContext } from "../Context/CheckInContext";
import Table from "../Table/Table";
import { checkedInMap, searchMap } from "../Table/tableMapFunctions";

const CustomerSearch = ({ isCheckIn }) => {

    const { checkInState, updateCheckInData } = useContext(CheckInContext);
    const [query, updateQuery] = useState("");

    const headers = [["Name", "Time", "Type", "Status"], ["Name", "Type", "Status", ""]];

    const fuse = new Fuse(customerData, {
        keys: ["firstName", "lastName", "phoneNumber", "email"],
        threshold: .25,
        findAllMatches: true,
        useTokenSearch: true,
        tokenMatch: "all",
        includeScore: true
    });

    const results = query ? fuse.search(query) : [];
    const tableData = results.length ? results : checkInState;

    const getStatus = (customerRecord) => {
        if (new Date(customerRecord.waiverExpirationDate) < new Date()) return 1;
        return 0;
    }

    const checkInClimber = (key) => {
        updateQuery("");
        const record = customerData.find((customer) => customer.userId === key);
        if (checkInState.some(customer => customer.userId === key)) return alert("Customer has already been checked in");
        
        const newCheckInData = {
            checkInId: 1,
            userId: key,
            firstName: record.firstName,
            middleName: record.middleName,
            lastName: record.lastName,
            member: record.member,
            checkInTime: new Date().toISOString(),
            status: getStatus(record)
        }
        updateCheckInData([...checkInState, newCheckInData]);
    }

    return (
        <>
            <Input
                name="search"
                placeholder="Name, email, or phone number..."
                value={query}
                onChange={(e) => updateQuery(e.target.value)}
            />
            {isCheckIn && results.length === 0 ?
                <Table
                    headers={headers[0]}
                    tableData={checkInState}
                    tableDataMap={checkedInMap}
                /> :
                <Table
                    headers={headers[1]}
                    tableData={results}
                    tableDataMap={searchMap}
                    btnText={isCheckIn ? "Check In" : "View Record"}
                    onClick={checkInClimber}
                    onClickArgs={[]}
                />}
        </>
    )
}

export default CustomerSearch;