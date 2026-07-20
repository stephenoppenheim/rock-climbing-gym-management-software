
import { X } from "lucide-react";
import { useState } from "react";
import "./RightSideBar.css";

const RightSideBar = ({ title, sidebarOpen, updateSidebarOpen, onClick, children }) => {

    return (
        <article className={`rightsidebar ${sidebarOpen}`}>
            <header>
                <h3>{title}</h3>
                <X className="rightsidebar-x" onClick={onClick || (() => updateSidebarOpen("closed"))} />
            </header>
            {children}
        </article>
    )
}

export default RightSideBar;

