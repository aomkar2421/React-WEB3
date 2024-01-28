import './App.css'
import {Routes, Route, Link} from 'react-router-dom';
import Body from './Body'
import Memo from './Memo'
import Callback from './Callback'
import Spinner from './Spinner';
const Header = () => {
    return (
        <>
            <div className='h'>
                <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/memo'>Memo</Link></li>
                <li><Link to='/callback'>Callback</Link></li>
                <li><Link to='/spinner'>Spinner</Link></li>
                </ul>
            </div>

            <Routes>
                <Route path='/' element={<Body/>} ></Route>
                <Route path='/memo' element={<Memo/>} ></Route>
                <Route path='/callback' element={<Callback/>} ></Route>
                <Route path='/spinner' element={<Spinner/>} ></Route>
            </Routes>

        </>
    )
}

export default Header