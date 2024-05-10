import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";
import PageNotFound from "./page/PageNotFound.jsx";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import Login from "./page/Login.jsx";
import {useState} from "react";

function App() {
    const [currentUser, setCurrentUser] = useState({token:"",username:""});

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route index element={<Navigate to="home"/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
