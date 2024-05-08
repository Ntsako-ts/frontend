import { Link } from "react-router-dom";

function About(){

    return(
        <div className="about-wrapper">
        <div className="about-content">
        <nav className="nav-bar">
            <div id="navbar">
            <ul>
            <li>
                <Link to="/" className="nav-link">Start</Link>
            </li>
            <li>
                <Link to="/contacts" className="nav-link">Contacts</Link>
            </li>
            </ul>
            </div>
        </nav>
        <h1>ABOUT US</h1>
            <h2>
                To provide self assessment of health status in case youre feeling a little bit off or 
                experiencing certain symptoms, this websites gives a a prediction of what could be wrong with your health
                based on the symptoms you provide, However, is it advised you visit your nearest health institution for a 
                proper check up as this website can sometimes make mistakes
            </h2>
            <p>&copy; {new Date().getFullYear()} ntsako.onlinehealth.institution.org</p>
        </div>
        </div>
    );

}
export default About