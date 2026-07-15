
import { createContext, useState } from "react";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {

    const [toastData, updateToastData] = useState({ isVisible: false, message: null });
    
    return (
        <ToastContext.Provider value={{ toastData, updateToastData }}>
            {children}
        </ToastContext.Provider>
    )
}