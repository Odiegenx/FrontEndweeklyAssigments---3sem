import { NavLink } from 'react-router-dom'

export default function MainNavBar() {
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
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/logout">Log out</NavLink>
            </li>
        </nav>
    )
}