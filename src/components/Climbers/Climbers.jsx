
import { useState } from "react";
import CustomerRecord from "../CustomerRecord/CustomerRecord";
import CustomerSearch from "../CustomerSearch/CustomerSearch";
import "./Climbers.css";

const Climbers = () => {

    const [curClimber, updateCurClimber] = useState({ firstName: null, lastName: null, phoneNumber: null, email: null, addressLine1: null, addressLine2: null, city: null, state: null, zipCode: null, birthDate: null, hasWaiver: null, status: null});
    const [climberVisible, updateClimberVisible] = useState(false);

    return (
        <>
            <h3>Climbers</h3>
            <CustomerSearch type="climberSearch" stateUpdaters={{ updateCurClimber, updateClimberVisible }} />
            <CustomerRecord user={curClimber} />
        </>
    )
}

export default Climbers;