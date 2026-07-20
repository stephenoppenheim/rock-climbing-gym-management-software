
import { useContext, useState } from "react";
import Input from "../Input/Input";
import issueList from "../../assets/issue-list.json";
import "./CustomerSearch.css";
import Fuse from "fuse.js";
import { CheckInContext } from "../Context/CheckInContext";
import Table from "../Table/Table";
import Button from "../Button/Button";
import { AlertContext } from "../Context/AlertContext";
import { CustomerContext } from "../Context/ClimberContext";
import { CircleAlert, CircleCheck } from "lucide-react";
import { QueryContext } from "../Context/QueryContext";

const CustomerSearch = ({ type, stateUpdaters }) => {
    
    const { updateAlertData } = useContext(AlertContext)
    const { customerDataState, updateCustomerDataState } = useContext(CustomerContext);
    const { checkInState, updateCheckInData } = useContext(CheckInContext);
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
    const finalType = type === "checkIn" && results.length ? "checkInSearch" : type;

    const checkInClimber = (userId) => {

        updateQuery("");
        
        if (checkInState.some(customer => customer.userId === userId)) return updateAlertData({ isVisible: true, message: "Customer has already been checked in" });
        const climber = customerDataState.find((customer) => customer.userId === userId);

        const newCheckInData = {
            userId,
            checkInId: crypto.randomUUID(),
            firstName: climber.firstName,
            middleName: climber.middleName,
            lastName: climber.lastName,
            member: climber.member,
            checkInTime: new Date().toISOString(),
            status: climber.status
        }

        updateCheckInData([...checkInState, newCheckInData]);
    }

    const openClimberRecord = (userId) => {
        const climber = customerDataState.find((customer) => customer.userId === userId);
        stateUpdaters.updateCurClimber(climber);
        stateUpdaters.updateClimberVisible(true);
        stateUpdaters.updateSidebarOpen("open");
    }

    const tableProps = {
        "checkIn": {
            headers: ["", "Name", "Time"],
            tableData: checkInState.toReversed(),
            tableDataMap: checkedInMap
        },
        "checkInSearch": {
            headers: ["", "Name", ""],
            tableData: results,
            tableDataMap: checkInSearchMap,
            onClick: checkInClimber
        },
        "climberSearch": {
            headers: ["", "Name", ""],
            tableData: results,
            tableDataMap: climberSearchMap,
            onClick: openClimberRecord
        }
    }

    const inputProps = {
        name: "search",
        placeholder: "Name, email, or phone number...",
        value: query,
        onChange: (e) => updateQuery(e.target.value)
    }

    return (
        <div className="customersearch">
            <Input
                name="search"
                placeholder="Name, email, or phone number..."
                value={query} 
                onChange={(e) => updateQuery(e.target.value)}
            />
            <Table {...tableProps[finalType]} />
        </div>
    )
}


// Helper functions for search component
const checkedInMap = (user) => {
    const key = user.checkInId;
    const checkInTime = user.checkInTime;
    const hour = +checkInTime.slice(11, 13);
    const issueIndex = user.status;
    const formattedTime = `${hour % 12 || 12}:${checkInTime.slice(14, 16)} ${hour < 12 ? "AM" : "PM"}`;

    return (
        <tr key={key}>
            <td>{issueIndex ? <CircleAlert className="table-alert"/> : <CircleCheck className="table-check"/>}</td>
            <td>
                <div className="table-name-member">
                    <span className="table-name">{`${user.firstName} ${user.lastName}`}</span>
                    <span className="table-member">{user.member ? "Member" : "Guest"}</span>
                </div>
            </td>
            <td className="table-time">{formattedTime}</td>
        </tr>
    )
}

const checkInSearchMap = (user, onClick) => {
    user = user.item;
    const key = user.userId;
    const issueIndex = user.status;
    return (
        <tr key={key}>
            <td>{issueIndex ? <CircleAlert className="table-alert"/> : <CircleCheck className="table-check"/>}</td>
            <td>
                <div className="table-name-member">
                    <span className="table-name">{`${user.firstName} ${user.lastName}`}</span>
                    <span className="table-member">{user.member ? "Member" : "Guest"}</span>
                </div>
            </td>
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
            <td>{issueIndex ? <CircleAlert className="table-alert"/> : <CircleCheck className="table-check"/>}</td>
            <td>
                <div className="table-name-member">
                    <span className="table-name">{`${user.firstName} ${user.lastName}`}</span>
                    <span className="table-member">{user.member ? "Member" : "Guest"}</span>
                </div>
            </td>
            <td>
                <Button text="View Record" onClick={() => onClick(key)} />
            </td>
        </tr>
    )
}

export default CustomerSearch;