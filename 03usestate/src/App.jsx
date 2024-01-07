import { Header } from './Header.jsx';
import './App.css'
import { useState } from 'react';


function App() {
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  
  let [count , setCount] = useState(10);

  return (
    <div className="container">
      <Header/>
      <div className="count">
          <h1>Count is {count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default App


{/* <div className="cards">
        <Movie name="DRACULA" src="https://wallpapercave.com/dwp2x/wp8525542.jpg"/>
        <Movie name="DARK KNIGHT" src="https://wallpapercave.com/dwp2x/wp1934740.jpg"/>
        <Movie name="AFTER EARTH" src="https://wallpapercave.com/dwp2x/wp10387943.jpg"/>
        <Movie name="JURASSIC WORLD" src="https://wallpapercave.com/dwp2x/wp10387945.jpg"/>
        </div>

        <div className="cards">
        <Movie name="Dark" src="https://wallpapercave.com/dwp2x/wp9875927.jpg"/>
        <Movie name="Dark" src="https://wallpapercave.com/dwp2x/wp3551228.jpg"/>
        <Movie name="Dark" src="https://wallpapercave.com/dwp2x/wp9496409.jpg"/>
        <Movie name="Dark" src="https://wallpapercave.com/dwp2x/wp9875959.jpg"/>
        </div> */}