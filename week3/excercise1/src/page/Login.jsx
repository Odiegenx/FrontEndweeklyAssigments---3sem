
import loginData from "../services/apiFacade.js"
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

const Login = ({currentUser,setCurrentUser}) => {

    const [loginInfo, setLoginInfo] = useState({username: "", password: ""});
    const navigate = useNavigate();
    // lifting state up - the state is lifted up to the parent component TodoList so that the state can be shared between the Login and the TodoList components.
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(loginInfo);
        setLoginInfo({username: loginInfo.username, password: loginInfo.password});
        loginData(loginInfo).then(data => {
            setCurrentUser(data);
            setLoginInfo({username: "", password: ""});
            navigate("/home");
        }).catch(error => {
            console.error('Error:', error);
            alert('Registration failed, try again');
            setLoginInfo({username: "", password: ""});
        });
    }
    const handleChange = (event) => {
        setLoginInfo({...loginInfo, [event.target.id]: event.target.value});
        //console.log(loginInfo)
    }

    return currentUser ? (
        <div></div> // If the user is logged in, the login form is not displayed
    ) : (
        <div id="loginform">
            <form onSubmit={handleSubmit}>
                User name <input id="username" type="text" value={loginInfo.username} placeholder="user name" onChange={handleChange} /> <br />
                Password <input id="password" type="password" value={loginInfo.password} placeholder="password" onChange={handleChange} /> <br />
                <input type="submit" value="Login" />
            </form>
            <p>No account? <NavLink to="/login">Register</NavLink></p>
        </div>
    );
}
export default Login;