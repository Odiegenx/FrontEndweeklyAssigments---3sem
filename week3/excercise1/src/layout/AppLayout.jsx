import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

export default function AppLayout({currentUser , setCurrentUser}) {
    return (
        <>
            <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <Outlet/>
        </>
    )
}