import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

export default function AppLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}