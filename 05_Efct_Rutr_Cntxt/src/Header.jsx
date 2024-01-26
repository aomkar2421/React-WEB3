import './App.css'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

export const Header = () => {
    return (
        <Router>
                <div className="nav">
                    <Link className='a' to="/">Home</Link>
                    <Link className='a' to="/about">About</Link>
                    <Link className='a' to="/contact">Contact</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

        </Router>
    )
}

export default Header
