
import "./CustomerRecord.css";

const CustomerRecord = ({ user }) => {

    const getAge = (birthDateStr) => {

        const today = new Date();
        const birthDate = new Date(birthDateStr);

        let age = today.getFullYear() - birthDate.getFullYear()

        const monthDif = today.getMonth() - birthDate.getMonth();
        const dayDif = today.getDate() - birthDate.getDate();

        return monthDif < 0 || monthDif === 0 && dayDif < 0 ? age - 1 : age;
    }

    return (
        <article className="customerrecord">
            <header>
                <h3>{`${user.firstName} ${user.lastName}`}</h3>
                <p>{user.phoneNumber}</p>
                <p>{user.email}</p>
            </header>
            <section>
                <div>
                    <span>Address</span>
                    <p>{user.addressLine1}</p>
                    {user.addressLine2 && <p>{user.addressLine2}</p>}
                    {<p>{`${user.city}, ${user.state} ${user.zipCode}`}</p>}
                </div>
                <div>
                    <span>Date of Birth</span>
                    <p>{`${user.birthDate} - ${getAge(user.birthDate)}`}</p>
                </div>
                <div>
                    <span>Has Waiver?</span>
                    <p>{user.hasWaiver ? "✅" : "❌"}</p>
                </div>
                <div>
                    <span>Waiver Valid</span>
                    <p>{user.status ? "❌" : "✅"}</p>
                </div>
            </section>
        </article>
    )
}

export default CustomerRecord;