
import { useContext, useRef } from "react";
import "./Signature.css";
import SignatureCanvas from "react-signature-canvas";
import Button from "../Button/Button";
import { ToastContext } from "../Context/ToastContext";

const Signature = ({ label, updateState, updateVisibility, absent}) => {

    const { toastData, updateToastData } = useContext(ToastContext);
    const signatureRef = useRef(null);

    const closeSignature = () => {
        signatureRef.current.clear();
        updateVisibility("absent");
    }

    const saveSignature = () => {

        if (signatureRef.current.isEmpty()) {
            return updateToastData({ isVisible: true, message: "Signature cannot be empty" });
        }

        const signatureUrl = signatureRef.current.toDataURL("image/png");
        
        updateState(signatureUrl);
        closeSignature();
    }
    
    return (
        <section className={`signature ${absent}`}>
            <h3>{label}</h3>
            <SignatureCanvas ref={signatureRef} penColor="black" canvasProps={{width: 500, height: 200}} />
            <p>Use your mouse or finger to enter your {label.toLowerCase()} above. Click OK to save.</p>
            <div>
                <Button onClick={closeSignature} text="Cancel" />
                <Button onClick={saveSignature} text="✓ OK" />
            </div>
        </section>
    )
}

export default Signature;

// { classes, onClick, type = "button", text = "Click Me" }

// Width is Math.min(700, window.innerWidth - 50)
// Height is Math.min(350, window.innerHeight - 175);