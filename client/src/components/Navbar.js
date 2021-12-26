import React,{useContext} from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom';
import noteContext from '../context/notes/NoteContext';

function Navbar() {
  const userId=localStorage.getItem("userId");
  const context=useContext(noteContext);
  const {deleteUser}=context;
  let location = useLocation();
  let navigate=useNavigate();
 const handleLogout=()=>{
   localStorage.removeItem('token');
   localStorage.removeItem('userId');
   navigate('/login');
   window.location.reload();
   
 }

 
 const reload1=()=>{
   
   navigate('/');
   window.location.reload();
 }
 const reload2=()=>{
   
   navigate('/about');
   window.location.reload();
 }
 const reload3=()=>{
   
   navigate('/contact');
   window.location.reload();
 }
 const reload4=()=>{
   
   navigate('/login');
   window.location.reload();
 }
 const reload5=()=>{
   
   navigate('/signup');
   window.location.reload();
 }
 
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link onClick={reload1} className="navbar-brand" to="/">iNoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link onClick={reload1} className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link onClick={reload2} className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link onClick={reload3} className={`nav-link ${location.pathname==="/contact"?"active":""}`} to="/contact">Contact</Link>
        </li>
       
       
      </ul>
      {!localStorage.getItem('token')?
      <form className="d-flex">
      <Link onClick={reload4} className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
      <Link  onClick={reload5} className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
      </form>:<div><button onClick={handleLogout} className="btn btn-primary" >Logout</button>&emsp;
               <button onClick={async()=>{await deleteUser(userId);
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('userId');
                                    navigate('/login');
                                    window.location.reload();}} className="btn btn-primary" >Delete account</button></div>}
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
