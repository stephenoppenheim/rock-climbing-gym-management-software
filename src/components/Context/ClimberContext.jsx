
import { createContext, useState } from "react";
import customerData from "../../assets/customer-data.json"

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {

    const [customerDataState, updateCustomerDataState] = useState(customerData); // Mock data - Will update via (maybe) websocket in future version

    return (
        <CustomerContext.Provider value={{ customerDataState, updateCustomerDataState }}>
            {children}
        </CustomerContext.Provider>
    )
}