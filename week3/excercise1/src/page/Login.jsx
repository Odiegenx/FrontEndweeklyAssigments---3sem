
import loginData from "../services/apiFacade.js"
import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import styled from "styled-components";

const LoginForm = styled.form`
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


const Login = ({currentUser,setCurrentUser}) => {

    const [loginInfo, setLoginInfo] = useState({username: "", password: ""});
    const navigate = useNavigate();
    // lifting state up - the state is lifted up to the parent component TodoList so that the state can be shared between the Login and the TodoList components.
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(loginInfo);
        //setCurrentUser(loginInfo);
        setLoginInfo({username: loginInfo.username, password: loginInfo.password});
        loginData(loginInfo).then(data => {
            setCurrentUser(data);
            setLoginInfo({username: "", password: ""});
            localStorage.setItem("currentUser", JSON.stringify(data));
            navigate("/home");
        }).catch(error => {
            console.error('Error:', error);
            alert('Registration failed, try again');
            setLoginInfo({username: "", password: ""});
            //setCurrentUser(null);
        });
    }
    const handleChange = (event) => {
        setLoginInfo({...loginInfo, [event.target.id]: event.target.value});
        //console.log(loginInfo)
    }

    useEffect(() => {
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
    },[currentUser]);

    return  (
        <LoginForm onSubmit={handleSubmit}>
            User name <Input id="username" type="text" value={loginInfo.username} placeholder="user name" onChange={handleChange} />
            Password <Input id="password" type="password" value={loginInfo.password} placeholder="password" onChange={handleChange} />
            <SubmitButton type="submit" value="Login" />
            <p>No account? <NavLink to="/register">Register</NavLink></p>
        </LoginForm>
    )
}
export default Login;