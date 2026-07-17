
import Button from "../Button/Button";
import "./DocumentCard.css";

const DocumentCard = ({ docData, updateCurDoc }) => {

    const { firstName, middleName, lastName } = docData;
    const fullName = [firstName, middleName, lastName].map(name => name.trim()).filter(Boolean).join(" ");
    const docDate = new Date(docData.dateTime);
    const isToday = new Date().toLocaleDateString("en-US") === docDate.toLocaleDateString("en-US");
    const dateTimeOptions = isToday ? { hour: "2-digit", minute: "2-digit" } : { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
    const localDateTime = `${isToday ? "Today, " : ""}${new Date(docData.dateTime).toLocaleString("en-US", dateTimeOptions)}`;

    return (
        <article className="documentcard">
            <div>
                <h3>{fullName}</h3>
                <h4>{docData.type}</h4>
            </div>
            <div className="documentcard-time-button">
                <p>{localDateTime}</p>
                <Button text="Attach to Record" onClick={() => updateCurDoc(docData)} />
            </div>
        </article>
    )
}

export default DocumentCard;