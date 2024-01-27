import './App.css'
import {Routes, Route, Link} from 'react-router-dom';
import Body from './Body'
import Ref from './Ref'
import Reducer from './Reducer'

const Header = () => {
    return (
        <>
            <div className='h'>
                <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/ref'>Ref</Link></li>
                <li><Link to='/reducer'>Reducer</Link></li>
                </ul>
            </div>

            <Routes>
                <Route path='/' element={<Body/>} ></Route>
                <Route path='/ref' element={<Ref/>} ></Route>
                <Route path='/reducer' element={<Reducer/>} ></Route>
            </Routes>

        </>
    )
}

export default Header