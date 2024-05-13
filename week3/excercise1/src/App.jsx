import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";
import PageNotFound from "./page/PageNotFound.jsx";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import ProtectedRoute from "./layout/ProtectedRoute.jsx";
import {useEffect, useState} from "react";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    /*useEffect(() => {
        if (currentUser) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [currentUser]);*/

  return (
    <BrowserRouter>
        <Routes>
            <Route element={
                <ProtectedRoute isAuthenticated={currentUser}>
                    <AppLayout currentUser={currentUser} setCurrentUser={setCurrentUser} setIsAuthenticated={isAuthenticated} />
                </ProtectedRoute>
            }>
                <Route index element={<Navigate to="home"/>}/>
                <Route path="home" element={<Home currentUser={currentUser} />}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>

            </Route>
            <Route path="login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
            <Route path="register" element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
