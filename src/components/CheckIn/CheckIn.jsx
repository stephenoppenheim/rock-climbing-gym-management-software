
import "./CheckIn.css";
import CustomerSearch from "../CustomerSearch/CustomerSearch";
import { Search } from "lucide-react";

const CheckIn = () => {

    return (
        <div className="checkin">
            <CustomerSearch type="checkIn"></CustomerSearch>
        </div>
    )
}

export default CheckIn;