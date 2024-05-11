import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";


function Check(){

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

    const diagnoseUser=async(e)=>{
        e.preventDefault();

        setLoading(true);
        
        try {

            const token = localStorage.getItem('token');

            const userResponse = await fetch('https://backend-83h2.onrender.com/api/data/',
        {
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
            }),
        });

        // console.log(userResponse.statusText);
        // const data = await userResponse.json();
        // console.log(data);


        if(userResponse.status == 201){
            //const data = await userResponse.json();

            //redirect to home page
            navigate('/history');
        }
            
        } catch (error) {
            
            console.error('Error:', error);

        }finally{
            setLoading(false);
        }

    }

    // button styling
    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
        marginLeft: "0px",
        borderRadius: "15px",
        border: "none",
        backgroundColor: "rgba(0, 248, 83, 0.75)",
        padding: "10px",
        cursor: "pointer",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "20px",
        fontWeight: "bold",
        color: "aliceblue",
        textDecoration: "none",
        width : "400px"
    }


    const validate=()=>{
        let results = true;

        if(age ==='' || age ===null){
            results = false;
            alert('Invalid age');
        }
        if(bodyMassIndex ==='' || bodyMassIndex ===null){
            results = false;
            alert('Invalid body mass index');
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


    // const logout= async()=>{

    //     try{
    //         const token = localStorage.getItem('token');

    //         if(token){

    //             const response = await fetch('https://health2-v6zl.onrender.com/api/logout/', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': 'token ' + token,
    //             },
    //             });

    //             if(response.status == 200){
    //                 // redirect to home page
    //                 navigate('/login', {replace: true});

    //             }else {
    //                 console.alert('Error logging out:', response.statusText);
    //               }
    //         }else{
                
    //         }

    //     }catch(error){

    //     }
    // };


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
            </ul>
            </div>
        </nav>
        <h1>Self Diagnose</h1>
        <div className="diagnosis-inputs">
            <form onSubmit={diagnoseUser}>
                <div className="data-input"><input type="text" placeholder="Age" required value={age} onChange={(e)=>setAge(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Body Mass Index" required value={bodyMassIndex} onChange={(e)=>setBodyMassIndex(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Pregnancies" required value={pregnancies} onChange={(e)=>setPregnancies(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Glucose level" required value={glucoseLevel} onChange={(e)=>setGlucoseLevel(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Blood pressure" required value={bloodPressure} onChange={(e)=>setBloodPressure(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Skin thickness" required value={skinThikness} onChange={(e)=>setSkinThickness(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Insulin level" required value={insulinLevel} onChange={(e)=>setInsulinLevel(e.target.value)}></input></div>
                <div className="data-input"><input type="text" placeholder="Diabetes Pedigree Function" required value={diabetesPedigreeFuction} onChange={(e)=>setDiabetesPedigreeFuction(e.target.value)}></input></div>
                <button type="submit"  style={styles} className="diagnose-btn">{loading ? 'Diagnosing...' : 'Diagnose'}</button>
            </form>
        </div>
        </div>

    );
    
}

    



export default Check