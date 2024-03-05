// import logo from '../../public/';
import '../../src/App.css';
import {  react,useState } from "react";
import { useNavigate } from "react-router-dom";


function App() {
  const [Name,setName] = useState("");
  const [email,setemail] = useState("");
  const [pwd,setpwd] = useState("");
  const navigate = useNavigate();

  async function registeruser(e) {
    e.preventDefault();
    const resp = await fetch('http://localhost:7777/api/register',{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({Name,email,pwd}),
    })

    const data  = await resp.json();
    if(data.status === "ok"){
      navigate('/Login');
    }
    console.log('data :>> ', data);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h3>Register</h3>
        <form onSubmit={(e)=>registeruser(e)}>
          <input value={Name} type="text" onChange={(e)=>{ setName(e.target.value)}} placeholder="Name"></input><br/>
          <input value={email} type="email" onChange={(e) => { setemail(e.target.value) }} placeholder="Email"></input><br />
          <input value={pwd} type="password" onChange={(e) => { setpwd(e.target.value) }} placeholder="Password"></input><br />
          <button type="submit">Register</button>
        </form>
      </header>
    </div>
  );
}

export default App;
