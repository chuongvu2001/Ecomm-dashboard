import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Header from './Header'

function Register() {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add")
        }
    }, [])
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    // const check = document.querySelector('#register-form');
    // check.validate({
    //     rules: {
    //         email:{
    //             require:true,
    //             remote: {
    //                 url: 
    //             }
    //         }
    //     }
    // })
    const signUp = async () => {
        const item = { name, email, password }
        // console.warn(item);
        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/add");
    }
    return (
        <>
            <Header></Header>
            <div className="col-sm-6 offset-sm-3">
                <form action="" id="register-form">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mt-3" placeholder="Name" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mt-3" placeholder="Email" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mt-3" placeholder="Password" />
                    <button type="submit" onClick={signUp} className="btn btn-primary mt-3">Register</button>
                </form>
            </div>
        </>
    )
}
export default Register