import './App.css'
import Header from './Header'
import Body from './Body'
import {BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </>
  )
}

export default App
