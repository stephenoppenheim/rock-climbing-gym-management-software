
import "./CheckIn.css";
import issueList from "../../assets/issue-list.json";
import customerData from "../../assets/customer-data.json"
import { useContext, useState } from "react";
import { CheckInContext } from "../Context/CheckInContext";
import Input from "../Input/Input";
import SearchBar from "../SearchBar/SearchBar";
import Fuse from "fuse.js";

const CheckIn = () => {
    
    const { checkInState } = useContext(CheckInContext);

    const [query, updateQuery] = useState("")

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

    return (
        <>
            <h3>Check-In</h3>
            <Input name="search" placeholder="Name, email, or phone number..." value={query} onChange={(e) => updateQuery(e.target.value)}/>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        {!results.length && <th scope="col">Check-In Time</th>}
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(user => {
                        if (results.length) user = user.item;
                        const checkInTime = user.checkInTime || "";
                        const hour = +checkInTime.slice(11, 13);
                        const issueIndex = user.status;
                        console.log(user)
                        return (
                            <tr key={user.checkInId || user.userId}>
                                <td>{`${user.firstName} ${user.lastName}`}</td>
                                {!results.length && <td>{`${hour % 12 || 12}:${checkInTime.slice(14, 16)} ${hour < 12 ? "AM" : "PM"}`}</td>}
                                <td>{user.member ? "Member" : "Guest"}</td>
                                <td>{issueIndex ? issueList[issueIndex] : ""}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default CheckIn;