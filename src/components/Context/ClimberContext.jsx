
import { createContext, useState } from "react";
import customerData from "../../assets/customer-data.json"

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {

    const [customerDataState, updateCustomerDataState] = useState(customerData);

    return (
        <CustomerContext.Provider value={{ customerDataState, updateCustomerDataState }}>
            {children}
        </CustomerContext.Provider>
    )
}