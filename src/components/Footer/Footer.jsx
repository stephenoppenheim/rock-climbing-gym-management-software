
import "./Footer.css";

const Footer = () => {

    const year = new Date().getFullYear();
    const name = "Stephen Oppenheim";

    return (
        <footer className="footer">© {year} {name}</footer>
    )
}

export default Footer;