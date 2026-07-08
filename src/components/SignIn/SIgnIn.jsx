
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useNavigate } from 'react-router';
import loginData from "../../assets/login-data.json";
import './SignIn.css';


const SignIn = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email").toLowerCase();
        const password = formData.get("password");
        const user = loginData.find(user => user.email === email);
        if (!user) console.error("FUTURE FEATURE - EMAL NOT FOUND");
        else {
            if (user.password === password) navigate("/dashboard");
            else console.error("FUTURE FEATURE - PASSWORD INCORRECT");
        }
    }

    return (
        <section>
            <h2>SIGN IN</h2>
            <form className="sign-in-form" onSubmit={handleSubmit}>
                <Input label="EMAIL" type="email" name="email" required />
                <Input label="PASSWORD" type="password" name="password" required />
                <Button type="submit" text="Sign In" />
            </form>
        </section>
    )
}

export default SignIn;