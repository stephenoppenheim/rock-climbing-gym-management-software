
import Button from '../Button/Button';
import Input from '../Input/Input';
import './SignIn.css';

const SignIn = () => {
    return (
        <section>
            <h2>SIGN IN</h2>
            <form className="sign-in-form">
                <Input label="EMAIL" type="email" name="email" required />
                <Input label="PASSWORD" type="password" name="password" required />
                <Button type="submit" text="Sign In" />
            </form>
        </section>
    )
}

export default SignIn;