
import { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {

    const [alertData, updateAlertData] = useState({ isVisible: false, message: null });
    
    return (
        <AlertContext.Provider value={{ alertData, updateAlertData }}>
            {children}
        </AlertContext.Provider>
    )
}