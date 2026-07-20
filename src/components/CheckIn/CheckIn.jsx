
import "./CheckIn.css";
import CustomerSearch from "../CustomerSearch/CustomerSearch";
import { QueryContext } from "../Context/QueryContext";
import { useContext, useEffect } from "react";

const CheckIn = () => {

    const { updateQuery } = useContext(QueryContext);
    useEffect(() => updateQuery(""), []);

    return (
        <div className="checkin">
            <CustomerSearch type="checkIn" />
        </div>
    )
}

export default CheckIn;