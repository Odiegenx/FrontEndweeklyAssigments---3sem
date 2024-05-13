import { useNavigate } from 'react-router-dom'
import {useState} from "react";
import {RegisterUser} from "../services/apiFacade.js";
import styled from "styled-components";

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SubmitButton = styled.input`
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;

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
            <RegisterForm onSubmit={handleSubmit}>
                User name <Input id="username" type="text" value={loginInfo.username} placeholder="user name" onChange={handleChange} />
                Password <Input id="password1" type="password" value={loginInfo.password1} placeholder="password" onChange={handleChange} />
                Confirm password <Input id="password2" type="password" value={loginInfo.password2} placeholder="confirm password" onChange={handleChange} />
                <SubmitButton type="submit" value="Register" />
            </RegisterForm>
    </>
);
}