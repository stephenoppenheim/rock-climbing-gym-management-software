
import Button from '../Button/Button';
import './SignIn.css';

const SignIn = () => {
    return (
        <section>
            <h2>SIGN IN</h2>
            <form className="sign-in-form">
                <label>
                    <span>EMAIL</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>PASSWORD</span>
                    <input type="password" name="password" required />
                </label>
                <Button type="submit" text="Sign In" />
            </form>
        </section>
    )
}

export default SignIn;


// const Button = ({ type, classes, onClick, text }) => {
