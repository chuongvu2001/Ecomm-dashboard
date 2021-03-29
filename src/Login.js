import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Header from './Header'
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add")
        }
    }, [])

    const login = async () =>{
        // console.warn(email,password);
        let item = {email,password};
        let result = await fetch('http://localhost:8000/api/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push('/add');
    }
    return (
        <>
        <Header></Header>
        <div className="col-sm-6 offset-sm-3">
            <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control mt-3" placeholder="Email"/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control mt-3" placeholder="Password"/>
            <button type="submit" onClick={login}  className="btn btn-primary mt-3">Login</button>
        </div>
        </>
    )
}
export default Login