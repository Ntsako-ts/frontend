import {HashRouter as Router, Route, Routes} from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import Update from "./Update"
import Check from "./Check"
import About from "./About"
import Contacts from "./Contacts"
import Static from "./Static"
import HomePage from "./Home"
import Passwords from "./Passwords"
import History from "./History"
import UserDetails from "./User"
import NewUser from "./New"

function App() {

// Initializes the routes/redirects of the pages in the website

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Static/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/update" element={<Update/>}/>
          <Route path="/diagnose" element={<Check/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/passwords" element={<Passwords/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/user_details" element={<UserDetails/>}/>
          <Route path="/new_user" element={<NewUser/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
