
import { createContext, useState } from "react";

export const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
    const [query, updateQuery] = useState("");
    return (
        <QueryContext.Provider value={{ query, updateQuery }}>
            {children}
        </QueryContext.Provider>
    )
}

export default QueryProvider;