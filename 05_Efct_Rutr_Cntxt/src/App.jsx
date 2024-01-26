import './App.css'
import Header from './Header'
import { useState , createContext} from 'react'
import Body from './Body'

const xyz = createContext();
const xyz1 = createContext(); //we can aslo do this way if needed or can aslo pass multiple in one context

function App() {
  const [data , setdata] = useState("Omkar");
  const [ank , setank] = useState({name:"ankita",age:21});

  return (
    <>
      {/* <xyz1 Provider value={ank}> */}
        <xyz.Provider value={{data , ank}}>
          <Header/>
          <Body abc={data}/>
        </xyz.Provider>
      {/* </xyz1> */}
    </>
  )
}

export default App
export {xyz} ;