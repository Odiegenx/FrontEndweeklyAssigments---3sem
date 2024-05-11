import MainNavBar from "./MainNavBar.jsx";


export default function Header({currentUser , setCurrentUser}) {
    return (
        <>
            <MainNavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </>
    )
}