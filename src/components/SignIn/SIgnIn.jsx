
import Button from '../Button/Button';
import Input from '../Input/Input';
import { NavLink, useNavigate } from 'react-router';
import loginData from "../../assets/login-data.json";
import './SignIn.css';
import { useRef, useState } from 'react';

const SignIn = () => {

    const navigate = useNavigate();
    const hint = useRef(null);
    const hintTimer = useRef(null);
    const hintDisplayTimer = useRef(null);

    const showHint = () => {
        console.log(hint.current)
        hint.current.classList.add("signin-display");
        hint.current.classList.add("signin-visible");
        if (hintTimer.current) clearTimeout(hintTimer.current);
        if (hintDisplayTimer.current) clearTimeout(hintDisplayTimer.current);
        hintTimer.current = setTimeout(() => hint.current.classList.remove("signin-visible"), 5000);
        hintDisplayTimer.current = setTimeout(() => hint.current.classList.remove("signin-display"), 5300);
    }

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
        <section className="signin">
            <div>
                <h2>SIGN IN</h2>
                <form className="signin-form" onSubmit={handleSubmit}>
                    <Input label="EMAIL" type="email" name="email" required bypassAsterisk />
                    <Input label="PASSWORD" type="password" name="password" required bypassAsterisk />
                    <div className="signin-forgot-container">
                        <p ref={hint}>Email: test@test.com<br />Password: testpassword</p>
                        <NavLink onClick={showHint} end>Forgot password?</NavLink>
                    </div>
                    <Button type="submit" text="Sign In" />
                </form>
                <hr />
                <section>
                    <p>New to Summit Pro?</p>
                    <p><NavLink to="user-info" end>Fill out a waiver</NavLink></p>
                </section>
            </div>
        </section>
    )
}

export default SignIn;