import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function Update(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const updateUser = async(e)=>{
        e.preventDefault();

        setLoading(true);



        try{
            const token = localStorage.getItem('token');

            if(token){

                const response = await fetch('https://health2-v6zl.onrender.com/api/update/', {
                method: 'PATCH', // partial update
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'token ' + token
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                })
            });

            if(response.ok){
                alert('successfully updated  details');
                navigate('/home');
            }else{
                console.log('Update failed:', response.statusText);
            }

            }else{
                alert("you're not logged in or registered, please login or register to use this service");
                navigate('/login', {replace: true});
            } 
    
        }catch(error){
            console.error('Error:', error);
        }finally{
            setLoading(false);
        }
    }

    const logout = async(e)=>{
        e.preventDefault();
        setLogginOut(true);

        // attaching the token
        const token = localStorage.getItem('token');

        try {
            // sending the request
            const response = await fetch('https://health2-v6zl.onrender.com/api/logout/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'token ' + token
                },
            });

            if(response.status == 200){

                alert('Successfully logged out');
                // redirect to home page
                navigate('/login', {replace: true});

            }else{
                alert('something went wrong, try again');
                console.log('Login failed:', response.statusText);
            }
            
        } catch (error) {
            console.error('Error:', error);
        }

    }

    return(
        <div className="wrapper">
            <nav className="nav-bar">
            <div id="navbar">
            <ul>
            <li>
                <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li>
                <Link to="/passwords" className="nav-link">Passwords</Link>
            </li>
            <li>
                <Link to="/user_details" className="nav-link">Me</Link>
            </li>
            <li>
                <Link to="#" className="nav-link" onClick={logout}>Logout</Link>
            </li>
            </ul>
            </div>
        </nav>
        <div className="card" >
            <form onSubmit={updateUser}>
                <h1>Update Details</h1>
                <div className="input-box"><input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}></input><i class='bx bx-user'></i></div>
                <div className="input-box"><input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><i class='bx bx-envelope'></i></div>
                <div className="input-box"><input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input><i class='bx bx-user'></i></div>
                <div className="input-box"><input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input><i class='bx bx-user'></i></div>
                <button type="submit" className="btn" disabled={loading}>{loading ? 'Updating...' : 'Update'}</button>
            </form>
        </div>
        </div>
    );
}

export default Update