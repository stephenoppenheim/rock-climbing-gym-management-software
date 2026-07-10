
import "./CheckIn.css";
import issueList from "../../assets/issue-list.json";
import { useContext } from "react";
import { CheckInContext } from "../Context/CheckInContext";

const CheckIn = () => {

    const { checkInState } = useContext(CheckInContext);

    return (
        <>
            <h3>Check-In</h3>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Check-In Time</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {checkInState.map(user => {
                        const checkInTime = user.checkInTime;
                        const hour = +checkInTime.slice(11, 13);
                        const issueIndex = user.status;
                        return (
                            <tr key={user.checkInId}>
                                <td>{`${user.firstName} ${user.lastName}`}</td>
                                <td>{`${hour % 12 || 12}:${checkInTime.slice(14, 16)} ${hour < 12 ? "AM" : "PM"}`}</td>
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