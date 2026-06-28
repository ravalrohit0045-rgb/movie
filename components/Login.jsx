import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        if (username === "rohit" && password === "1234") {
            localStorage.setItem("login", "true");
            alert("Login Successful");
            navigate("/");
        } 
        else {
            alert("Invalid Username or Password");
        }
    };

    return (

        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card p-4">
                        <h3 className="text-center mb-4">Login</h3>
                        <input type="text" className="form-control mb-3" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <input type="password" className="form-control mb-3" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button><br />
                        <h6 style={{textAlign:"center"}}>username:- rohit</h6>
                        <h6 style={{ textAlign: "center" }}>password:- 1234</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}