
import { useContext, useState } from "react";
import Input from "../Input/Input";
import customerData from "../../assets/customer-data.json";
import issueList from "../../assets/issue-list.json";
import "./CustomerSearch.css";
import Fuse from "fuse.js";
import { CheckInContext } from "../Context/CheckInContext";
import Table from "../Table/Table";
import Button from "../Button/Button";

const CustomerSearch = ({ type, stateUpdaters }) => {

    const { checkInState, updateCheckInData } = useContext(CheckInContext);
    const [query, updateQuery] = useState("");

    const fuse = new Fuse(customerData, {
        keys: ["firstName", "lastName", "phoneNumber", "email"],
        threshold: .25,
        findAllMatches: true,
        useTokenSearch: true,
        tokenMatch: "all",
        includeScore: true
    });

    const results = query ? fuse.search(query) : [];
    const finalType = type === "checkIn" && results.length ? "checkInSearch" : type;

    const checkInClimber = (userId) => {

        updateQuery("");
        const climber = customerData.find((customer) => customer.userId === userId);
        if (checkInState.some(customer => customer.userId === userId)) return alert("Customer has already been checked in");

        const newCheckInData = {
            userId,
            checkInId: self.crypto.randomUUID(),
            firstName: climber.firstName,
            middleName: climber.middleName,
            lastName: climber.lastName,
            member: climber.member,
            checkInTime: new Date().toISOString(),
            status: climber.status
        }

        updateCheckInData([...checkInState, newCheckInData]);
    }

    const openClimberRecord = (userId, updateCurClimber, updateClimberVisible) => {
        const climber = customerData.find((customer) => customer.userId === userId);
        stateUpdaters.updateCurClimber(climber);
        stateUpdaters.updateClimberVisible(true);
    }

    const tableProps = {
        "checkIn": {
            headers: ["Name", "Time", "Type", "Status"],
            tableData: checkInState,
            tableDataMap: checkedInMap
        },
        "checkInSearch": {
            headers: ["Name", "Type", "Status", ""],
            tableData: results,
            tableDataMap: checkInSearchMap,
            onClick: checkInClimber
        },
        "climberSearch": {
            headers: ["Name", "Type", "Status", ""],
            tableData: results,
            tableDataMap: climberSearchMap,
            onClick: openClimberRecord
        }
    }

    return (
        <>
            <Input name="search" placeholder="Name, email, or phone number..." value={query} onChange={(e) => updateQuery(e.target.value)}/>
            <Table {...tableProps[finalType]} />
        </>
    )
}


// Helper functions for search component
const checkedInMap = (user) => {
    const key = user.checkInId;
    const checkInTime = user.checkInTime;
    const hour = +checkInTime.slice(11, 13);
    const issueIndex = user.status;
    return (
        <tr key={key}>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{`${hour % 12 || 12}:${checkInTime.slice(14, 16)} ${hour < 12 ? "AM" : "PM"}`}</td>
            <td>{user.member ? "Member" : "Guest"}</td>
            <td>{issueIndex ? issueList[issueIndex] : ""}</td>
        </tr>
    )
}

const checkInSearchMap = (user, onClick) => {
    user = user.item;
    const key = user.userId;
    const issueIndex = user.status;
    return (
        <tr key={key}>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.member ? "Member" : "Guest"}</td>
            <td>{issueIndex ? issueList[issueIndex] : ""}</td>
            <td><Button text="Check In" onClick={() => onClick(key)} /></td>
        </tr>
    )
}

const climberSearchMap = (user, onClick) => {
    user = user.item;
    const key = user.userId;
    const issueIndex = user.status;
    return (
        <tr key={key}>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.member ? "Member" : "Guest"}</td>
            <td>{issueIndex ? issueList[issueIndex] : ""}</td>
            <td><Button text="View Record" onClick={() => onClick(key)} /></td>
        </tr>
    )
}

export default CustomerSearch;