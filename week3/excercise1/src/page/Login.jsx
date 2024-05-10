import React from "react";
import loginData from "../services/apiFacade.js"

const Login = ({currentUser,setCurrentUser}) => {

    const [loginInfo, setLoginInfo] = React.useState({username: "", password: ""});
    // lifting state up - the state is lifted up to the parent component TodoList so that the state can be shared between the Login and the TodoList components.
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(loginInfo);
        setLoginInfo({username: loginInfo.username, password: loginInfo.password});
        const data = loginData(loginInfo);
        console.log(data);
    }
    const changeToDo = (event) => {
        setLoginInfo({...loginInfo, [event.target.id]: event.target.value});
        console.log(loginInfo)
    }
    return(
        <div id="loginform">
            <form onSubmit={handleSubmit}>
                User name <input id="username" type="text" value={loginInfo.username} placeholder='user name' onChange={changeToDo} /> <br />
                password <input id='password' type="password" value={loginInfo.password} placeholder='password' onChange={changeToDo} /> <br />
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}
export default Login;