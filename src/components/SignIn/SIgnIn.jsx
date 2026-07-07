
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
                <button type="submit">Sign In</button>
            </form>
        </section>
    )
}

export default SignIn;