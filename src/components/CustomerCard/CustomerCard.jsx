
import "./CustomerCard.css";

const CustomerCard = ({ docData, updateRecordSelected, hasOnClick }) => {

    const { firstName, middleName, lastName } = docData;
    const fullName = [firstName, middleName, lastName].map(name => name.trim()).filter(Boolean).join(" ");
    const [birthYear, birthMonth, birthDate] = docData.birthDate.split("-");

    return (
        <article className="customercard" onClick={hasOnClick ? () => updateRecordSelected(docData) : undefined}>
            <h3>{fullName}</h3>
            <p>{`${birthMonth}-${birthDate}-${birthYear}`}</p>
        </article>
    )
}

export default CustomerCard;