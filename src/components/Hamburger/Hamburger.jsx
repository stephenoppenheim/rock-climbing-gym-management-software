
import { useRef } from "react";
import "./Hamburger.css";

const Hamburger = ({ menuState, updateMenuState }) => {

    const hamburger = useRef(null);
    const lineOne = useRef(null);
    const lineTwo = useRef(null);
    const lineThree = useRef(null);

    const openMenu = () => {
        updateMenuState(prev => prev === "idle" || prev === "closed" ? "open" : "closed");
        
    }

    return (
        <div ref={hamburger} className={`hamburger ${menuState === "idle" ? "" : menuState}`}  onClick={openMenu}>
            <div ref={lineOne} className="hamburger-line l1"></div>
            <div ref={lineTwo} className="hamburger-line l2"></div>
            <div ref={lineThree} className="hamburger-line l3"></div>
        </div>
    )
}

export default Hamburger