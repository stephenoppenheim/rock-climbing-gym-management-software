
import { createContext, useState } from "react";
import checkInData from "../../assets/check-in-data.json";

export const CheckInContext = createContext();

export const CheckInProvider = ({ children }) => {

    const [checkInState, updateCheckInData] = useState(checkInData); // Mock data - Will update via (maybe) websocket in future version

    return (
        <CheckInContext.Provider value={{ checkInState, updateCheckInData }}>
            {children}
        </CheckInContext.Provider>
    )
}