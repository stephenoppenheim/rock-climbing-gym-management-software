
import { useState } from "react";
import CustomerRecord from "../CustomerRecord/CustomerRecord";
import CustomerSearch from "../CustomerSearch/CustomerSearch";
import "./Climbers.css";

const Climbers = () => {

    const [curClimber, updateCurClimber] = useState({ firstName: null, lastName: null, phoneNumber: null, email: null, addressLine1: null, addressLine2: null, city: null, state: null, zipCode: null, birthDate: null, hasWaiver: null, status: null});
    const [climberVisible, updateClimberVisible] = useState(false);
    const [recordOpen, updateRecordOpen] = useState("closed");
    const stateUpdaters = { updateCurClimber, updateClimberVisible, updateRecordOpen };

    const openCloseRecord = () => {
        updateRecordOpen(prev => prev === "open" ? "closed" : "open");
    }

    return (
        <div className="climbers">
            <CustomerSearch
                openCloseRecord={openCloseRecord}
                type="climberSearch"
                stateUpdaters={stateUpdaters} 
            />
            <CustomerRecord
                openCloseRecord={openCloseRecord}
                recordOpen={recordOpen}
                updateRecordOpen={updateRecordOpen}
                user={curClimber}
            />
        </div>
    )
}

export default Climbers;