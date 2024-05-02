import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loginUser = async(e)=>{
        e.preventDefault();
        setLoading(true);
        if(validate()){
            
            try{

                const response = await fetch('https://health2-v6zl.onrender.com/api/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                });

    
                if(response.status == 200){

                const data = await response.json();
                const {token} =data;
                    
                    // save token in secure storage
                    localStorage.setItem('token', token);

                    // redirect to home page
                    navigate('/home', {replace: true});

                }else{
                    alert('something went wrong, try again');
                    console.log('Login failed:', response.statusText);
                }
        
            }catch(error){
                console.error('Error:', error);
            }finally{
                setLoading(false);
            }

        }
    }

    const validate=()=>{
        let results = true;
        if(username ==='' || username ===null){
            results = false;
            alert('Invalid username');
        }
        if(password ==='' || password ===null){
            results = false;
            alert('Invalid password');
        }
        return results;
    }

    return(
        <div className="wrapper">
            <nav className="nav-bar">
            <div id="navbar">
            <ul>
            <li>
                <Link to="/" className="nav-link">Start</Link>
            </li>
            <li>
                <Link to="/contacts" className="nav-link">Contacts</Link>
            </li>
            <li>
                <Link to="/about" className="nav-link">About</Link>
            </li>
            </ul>
            </div>
        </nav>
        <div className="card">
            <form onSubmit={loginUser}>
                <h1>Login</h1>
                <div className="input-box"><input type="text" placeholder="Username" required value={username} onChange={(e)=>setUsername(e.target.value)}></input><i class='bx bx-user'></i></div>
                <div className="input-box"><input type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}></input></div>
                <div className="remember-forgot">
                  
                </div>
                <button type="submit" className="btn" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
        </div>
    );

}

export default Login