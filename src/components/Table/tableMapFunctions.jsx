import Button from "../Button/Button";

export const checkedInMap = (user, issueList) => {
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

export const searchMap = (user, issueList, btnText, onClick, onClickArgs = []) => {
    user = user.item;
    const key = user.userId;
    const issueIndex = user.status;
    console.log("TEST", onClickArgs);
    return (
        <tr key={key}>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.member ? "Member" : "Guest"}</td>
            <td>{issueIndex ? issueList[issueIndex] : ""}</td>
            <td><Button text={btnText} onClick={() => onClick(key, ...onClickArgs)} /></td>
        </tr>
    )
}