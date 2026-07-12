
import "./CheckIn.css";
import issueList from "../../assets/issue-list.json";
import customerData from "../../assets/customer-data.json"
import { useContext, useState } from "react";
import { CheckInContext } from "../Context/CheckInContext";
import Input from "../Input/Input";
import SearchBar from "../SearchBar/SearchBar";
import Fuse from "fuse.js";
import Button from "../Button/Button";
import Table from "../Table/Table";
import { checkedInMap } from "../Table/tableMapFunctions";
import SearchCustomers from "../SearchCustomers/CustomerSearch";

const CheckIn = () => {
    return (
        <>
            <h3>Check-In</h3>
            <SearchCustomers isCheckIn />
        </>
    )
}

export default CheckIn;