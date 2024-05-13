import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoutButton from "./LogoutButton.jsx";

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #100000;
    padding: 10px 20px;
    box-shadow: 0px 4px 10px 0px rgba(10, 28, 3, 0.75);
`;

const NavList = styled.ul`
    display: flex;
    list-style-type: none;
`;

const NavItem = styled.li`
    margin-right: 20px;
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #e94560;
    font-size: 18px;
    &:hover {
        color: #0f3460;
    }
`;

const AuthLinks = styled.div`
    display: flex;
`;

export default function MainNavBar({currentUser ,setCurrentUser}) {
    return (
        <NavBar>
            <NavList>
                <NavItem>
                    <StyledLink to="/home">Home</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/about">About</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/contact">Contact</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/posts">Posts</StyledLink>
                </NavItem>
            </NavList>
            <NavList>
                {currentUser ?
                    <LogoutButton setCurrentUser={setCurrentUser}/>
                    :
                    <AuthLinks>
                        <NavItem>
                            <StyledLink to="/login">Login</StyledLink>
                        </NavItem>
                        <NavItem>
                            <StyledLink to="/register">Register</StyledLink>
                        </NavItem>
                    </AuthLinks>
                }
            </NavList>
        </NavBar>
    )
}