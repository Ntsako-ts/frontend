import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function Diagnosis(){

    const [age, setAge] = useState('');
    const [bodyMassIndex, setBodyMassIndex] = useState('');
    const [pregnancies, setPregnancies] = useState('');
    const [glucoseLevel, setGlucoseLevel] = useState('');
    const [bloodPressure, setBloodPressure] = useState('');
    const [skinThikness, setSkinThickness] = useState('');
    const [insulinLevel, setInsulinLevel] = useState('');
    const [diabetesPedigreeFuction, setDiabetesPedigreeFuction] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // button styling
    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
        marginLeft: "10px",
        borderRadius: "15px",
        border: "none",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        padding: "10px",
        cursor: "pointer",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "20px",
        fontWeight: "bold",
        color: "#333",
        textDecoration: "none",
    }


    const checkUser = async(e)=>{
        e.preventDefault();

        try {
            const diagnose = await fetch('https://backend-83h2.onrender.com/api/data/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'token ' + token
                },
                body: JSON.stringify({
                        age: age,
                        body_mass_index: bodyMassIndex,
                        pregnancies: pregnancies,
                        glucose_level: glucoseLevel,
                        blood_pressure: bloodPressure,
                        skin_thickness: skinThikness,
                        insulin_level: insulinLevel,
                        diabetes_pedigree_function: diabetesPedigreeFuction
                })
            });

            console.log(diagnose.statusText);
            const feedBack = await diagnose.json();
            console.log(feedBack);

        } catch (error) {
            
        }
    }


    const validate=()=>{
        let results = true;

        if(age ==='' || age ===null){
            results = false;
            alert('Invalid age');
        }
        if(bodyMassIndex ==='' || bodyMassIndex ===null){
            results = false;
            alert('Invalid height');
        }

        if(pregnancies ==='' || pregnancies ===null){
            results = false;
            alert('Invalid pregnancy');
        }

        if(glucoseLevel ==='' || glucoseLevel ===null){
            results = false;
            alert('Invalid glucose level');
        }

        if(bloodPressure ==='' || bloodPressure ===null){
            results = false;
            alert('Invalid blood pressure');
        }

        if(skinThikness ==='' || skinThikness ===null){
            results = false;
            alert('Invalid skin thickness');
        }

        if(insulinLevel ==='' || insulinLevel ===null){
            results = false;
            alert('Invalid insulin level');
        }

        if(diabetesPedigreeFuction ==='' || diabetesPedigreeFuction ===null){
            results = false;
            alert('Invalid diabetes pedigree function');
        }
    }


    const logout= async()=>{

        try{
            const token = localStorage.getItem('token');

            if(token){

                const response = await fetch('https://backend-83h2.onrender.com/api/logout/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'token ' + token,
                },
                });

                if(response.status == 200){
                    // redirect to home page
                    navigate('/login', {replace: true});

                }else {
                    console.alert('Error logging out:', response.statusText);
                  }
            }else{
                
            }

        }catch(error){

        }
    }


    return(
        <div className="diagnosis">
            <nav className="nav-bar">
            <div id="navbar">
            <ul>
            <li>
                <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li>
                <Link to="/history" className="nav-link">History</Link>
            </li>
            <li>
                <Link to="/update" className="nav-link">Update</Link>
            </li>
            </ul>
            </div>
        </nav>
        <h1>Self Diagnose</h1>
        <div className="diagnosis-inputs">
            <form onSubmit={checkUser}>
                <div className="data-input"><input type="text" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Body Mass Index" value={bodyMassIndex} onChange={(e)=>setBodyMassIndex(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Pregnancies" value={pregnancies} onChange={(e)=>setPregnancies(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Glucose level" value={glucoseLevel} onChange={(e)=>setGlucoseLevel(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Blood pressure" value={bloodPressure} onChange={(e)=>setBloodPressure(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Skin thickness" value={skinThikness} onChange={(e)=>setSkinThickness(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Insulin level" value={insulinLevel} onChange={(e)=>setInsulinLevel(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Diabetes Pedigree Function" value={diabetesPedigreeFuction} onChange={(e)=>setDiabetesPedigreeFuction(e.target.value)}></input></div>
                <button type="submit" style={styles} className="diagnose-btn">{loading ? 'Diagnosing...' : 'Diagnose'}</button>
            </form>
        </div>
        </div>

    );

}
export default Diagnosis