import { NavLink } from 'react-router-dom'
import LogoutButton from "./LogoutButton.jsx";

export default function MainNavBar({currentUser ,setCurrentUser}) {
    return (
        <nav>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/posts">Posts</NavLink>
            </li>
            {currentUser ?
                <LogoutButton setCurrentUser={setCurrentUser}/>
                :
                <div>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                </div>
            }
        </nav>
    )
}