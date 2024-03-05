
import { useNavigate } from "react-router-dom";
import { react, useState } from "react";


function App() {
    const [email, setemail] = useState("");
    const [pwd, setpwd] = useState("");
    const navigate = useNavigate();

    async function registeruser(e) {
        e.preventDefault();
        const resp = await fetch('http://localhost:7777/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, pwd }),
        })

        const data = await resp.json();
        if(data.user){
            alert('Login Successful');
            navigate('/Quote')
            
        }else{
            alert('Invalid username | Password')
        }
        console.log('data :>> ', data);
    }
    return (
        <div className="App">
            <header className="App-header">
                <h3>Login</h3>
                <form onSubmit={(e) => registeruser(e)}>
                    {/* <input value={Name} type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name"></input><br /> */}
                    <input value={email} type="email" onChange={(e) => { setemail(e.target.value) }} placeholder="Email"></input><br />
                    <input value={pwd} type="password" onChange={(e) => { setpwd(e.target.value) }} placeholder="Password"></input><br />
                    <button type="submit">Login</button>
                </form>
            </header>
        </div>
    );
}

export default App;
