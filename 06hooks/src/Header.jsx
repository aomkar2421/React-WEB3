import React from 'react'
import { Routes, Route, Link ,NavLink} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Error from "./Error"
import Mail from './Components/Mail'
import Insta from './Components/Insta'

const Header = () => {

    const omkar = ({isActive}) =>{
        return{
            color : isActive ? "red" : "white",
            fontweight : isActive ? "700" : "500",
            fontsize : isActive ? "20px" : "15px",
            liststyle : "none"
        }
    };

    return (
        <>
            <div className='h'>
                <ul>
                    <li><NavLink style={omkar} to="/">Home</NavLink></li>
                    <li><NavLink style={omkar} to="about">About</NavLink></li>
                    <li><NavLink style={omkar} to="contact">Contact</NavLink></li>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li> */}
                </ul>
            </div>

                    {/* Route can be used in two ways <Route></Route> as well as <Route/> */}
                    {/* Just while using nested Route we need to use <Route></Route> */}
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>} >
                    {/* for by default selection use index */}
                    <Route index element={<Mail/>} ></Route>
                    <Route path='mail' element={<Mail/>} ></Route>
                    <Route path='insta' element={<Insta/>} ></Route>
                </Route>
                <Route path='*' element={<Error/>} />
            </Routes>

        </>
    )
}

export default Header