
import Button from '../Button/Button';
import Input from '../Input/Input';
import { NavLink, useNavigate } from 'react-router';
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
                <Input label="EMAIL" type="email" name="email" required bypassAsterisk />
                <Input label="PASSWORD" type="password" name="password" required bypassAsterisk />
                <NavLink to="reset-password" end>Forgot password?</NavLink>
                <Button type="submit" text="Sign In" />
            </form>
            <section>
                <p>New to Summit Pro?</p>
                <p><NavLink to="create-account" end>Create an account</NavLink> or <NavLink to="user-info" end>Fill out a waiver</NavLink></p>
            </section>
        </section>
    )
}

export default SignIn;