import { useNavigate } from 'react-router-dom'
import {useState} from "react";
import {RegisterUser} from "../services/apiFacade.js";

export default function Register({currentUser, setCurrentUser}) {
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({username: "", password1: "", password2: ""});

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(loginInfo);
        if(loginInfo.password1 !== loginInfo.password2){
            alert("Passwords do not match");
            setLoginInfo({...loginInfo, password1: "", password2: ""});
            return;
        }
        setLoginInfo({username: loginInfo.username, password1: loginInfo.password1, password2: loginInfo.password2});
        //console.log(loginInfo);
        RegisterUser(loginInfo).then(data => {
            setCurrentUser(data);
            setLoginInfo({username: "", password1: "", password2: ""});
            console.log(data + "from register");
            navigate("/home");
        }).catch(error => {
            console.error('Error:', error);
            alert('Registration failed, try again');
            setLoginInfo({username: "", password1: "", password2: ""});
        });
    }

    const handleChange = (event) => {
        setLoginInfo({...loginInfo, [event.target.id]: event.target.value});
        //console.log(loginInfo)
    }
    return currentUser ? (
            <div>
                <h2>You are already logged in</h2>
            </div>
    ) : (
        <>
            <form onSubmit={handleSubmit}>
            User name <input id="username" type="text" value={loginInfo.username} placeholder="user name"
                             onChange={handleChange}/> <br/>
            Password <input id="password1" type="password" value={loginInfo.password1} placeholder="password"
                            onChange={handleChange}/> <br/>
            confirm password <input id="password2" type="password" value={loginInfo.password2} placeholder="confirm pasword"
                                    onChange={handleChange}/> <br/>
            <input type="submit" value="Login"/>
        </form>
    </>
);
}