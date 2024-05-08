import { Link } from "react-router-dom";

function Contacts(){

    return(
        <>
        <div className="contacts-wrapper">
        <div className="contacts-content">
        <nav className="nav-bar">
            <div id="navbar">
            <ul>
            <li>
                <Link to="/" className="nav-link">Start</Link>
            </li>
            <li>
                <Link to="/about" className="nav-link">About</Link>
            </li>
            </ul>
            </div>
        </nav>
        <h1>
            CONTACT US
        </h1>
            <h2>
                To communicate with with us you can use the following contact details
            </h2>
            <h2>email: website@mail.com</h2>
            <h2>call/text: +27 71 234 5678</h2>
            <p>&copy; {new Date().getFullYear()} ntsako.onlinehealth.institution.org</p>
            </div>
        </div>
        </>
    );

}
export default Contacts