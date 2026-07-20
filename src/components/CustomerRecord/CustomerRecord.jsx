
import "./CustomerRecord.css";
import { useState } from "react";

const CustomerRecord = ({ openCloseRecord, recordOpen, updateRecordOpen, user }) => {

    const getAge = (birthDateStr) => {

        const today = new Date();
        const birthDate = new Date(birthDateStr);

        let age = today.getFullYear() - birthDate.getFullYear()

        const monthDif = today.getMonth() - birthDate.getMonth();
        const dayDif = today.getDate() - birthDate.getDate();

        return monthDif < 0 || monthDif === 0 && dayDif < 0 ? age - 1 : age;
    }

    return (
        <>
            <section className="customerrecord-profile">
                <div className="customerrecord-profile-pic-container">
                    <div className="customerrecord-profile-pic"></div>
                    <p>Profile<br />Picture</p>
                </div>
                <div className="customerrecord-gen-info">
                    <h3 className="customerrecord-name">{`${user.firstName} ${user.lastName}`}</h3>
                    <p className="customerrecord-phone cr-mono">{user.phoneNumber}</p>
                    <p className="customerrecord-email cr-mono">{user.email}</p>
                </div>
            </section>
            <section className="customerrecord-data">
                <div className="customerrecord-slot">
                    <span className="cr-mono">Address</span>
                    <p className="crv">{user.addressLine1}</p>
                    {user.addressLine2 && <p className="crv">{user.addressLine2}</p>}
                    {<p className="crv">{`${user.city}, ${user.state} ${user.zipCode}`}</p>}
                </div> 
                <div className="customerrecord-slot">
                    <span className="cr-mono">Date of Birth</span>
                    <p className="crv">{`${user.birthDate} - ${getAge(user.birthDate)} years old`}</p>
                </div>
                <div className="customerrecord-waiver customerrecord-dual-slot">
                    <div className="customerrecord-wd">
                        <span className="cr-mono">Has Waiver?</span>
                        <p className="crv">{user.hasWaiver ? "✅" : "❌"}</p>
                    </div>
                    <div className="customerrecord-wd">
                        <span className="cr-mono">Waiver Valid</span>
                        <p className="crv">{user.status ? "❌" : "✅"}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CustomerRecord;