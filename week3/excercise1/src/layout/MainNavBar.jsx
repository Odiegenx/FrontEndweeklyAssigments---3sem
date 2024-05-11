import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoutButton from "./LogoutButton.jsx";

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    background: aqua;
`;

const NavList = styled.ul`
    display: flex;
    list-style-type: none;
`;

const NavItem = styled.li`
    margin-right: 10px;
`;

const AuthLinks = styled.div`
    display: flex;
`;

export default function MainNavBar({currentUser ,setCurrentUser}) {
    return (
        <NavBar>
            <NavList>
                <NavItem>
                    <NavLink to="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/posts">Posts</NavLink>
                </NavItem>
            </NavList>
            <NavList>
                {currentUser ?
                    <LogoutButton setCurrentUser={setCurrentUser}/>
                    :
                    <AuthLinks>
                        <NavItem>
                            <NavLink to="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/register">Register</NavLink>
                        </NavItem>
                    </AuthLinks>
                }
            </NavList>
        </NavBar>
    )
}