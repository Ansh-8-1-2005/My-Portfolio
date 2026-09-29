// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import {Routes, Route, Router} from "react-router-dom"
import Header from "./Header"
import Home from "./Pages/Home/Home"
import AboutMe from "./Pages/About/About"
import Service from "./Pages/Service/Service"
import Contact from "./Pages/contact/Contact"
import Projects from "./Pages/project/Projects"
import Skills from "./Pages/Skills/Skills"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer"
function App() {

  return (
    <>
    <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="dark"/>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<AboutMe/>}/>
        <Route path="/Services" element={<Service/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </>
    
  )
}

export default App
