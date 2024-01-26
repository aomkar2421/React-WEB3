import {Link , Outlet , } from 'react-router-dom'
import './App.css'

const Contact = () => {
  return (
    <div className='b'>
      <h3><Link to={'insta'}>INSTA</Link></h3>
      <h3><Link to={'mail'}>MAIL</Link></h3>
      <Outlet/>
    </div>
  )
}

export default Contact