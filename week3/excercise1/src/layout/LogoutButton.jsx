export default function LogoutButton( {setCurrentUser} ) {

    const handleLogout = () => {
        setCurrentUser(null);// Call setCurrentUser here, not directly in the Logout function
        localStorage.clear();
    };

    return (
        <div id="logoutButton">
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}