
import { useNavigate } from "react-router"
import Loading from "../../Loading/Loading"
import "./LoadingPage.css"
import { useEffect } from "react";

const LoadingPage = () => {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/dashboard");
        }, 3000)
    }, []);
    return (
        <div className="loadingpage">
            <Loading />
        </div>
    )
}

export default LoadingPage