
import { useContext, useEffect, useState } from "react";
import CustomerRecord from "../CustomerRecord/CustomerRecord";
import CustomerSearch from "../CustomerSearch/CustomerSearch";
import "./Climbers.css";
import RightSideBar from "../RightSideBar/RightSideBar";
import { QueryContext } from "../Context/QueryContext";

const Climbers = () => {

    const [curClimber, updateCurClimber] = useState({ firstName: null, lastName: null, phoneNumber: null, email: null, addressLine1: null, addressLine2: null, city: null, state: null, zipCode: null, birthDate: null, hasWaiver: null, status: null});
    const [climberVisible, updateClimberVisible] = useState(false);
    const [sidebarOpen, updateSidebarOpen] = useState("closed");
    const stateUpdaters = { updateCurClimber, updateClimberVisible, updateSidebarOpen };
    const { updateQuery } = useContext(QueryContext);

    // Reset search bar on mount
    useEffect(() => updateQuery(""), []);
                
    return (
        <div className="climbers">
            <CustomerSearch
                type="climberSearch"
                stateUpdaters={stateUpdaters} 
            />
            <RightSideBar title="Customer Profile" sidebarOpen={sidebarOpen} updateSidebarOpen={updateSidebarOpen}>
                <CustomerRecord user={curClimber}/>
            </RightSideBar>
            
        </div>
    )
}

export default Climbers;