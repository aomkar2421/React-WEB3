import './App.css'
import { useState } from 'react';


function Body() {
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  
  let [count , setCount] = useState(10);

  return (
    <div className="b">
      <div>
          <h1>Count is {count}</h1>
          <button>Increment</button>
          <button>Decrement</button>
      </div>
    </div>
  )
}

export default Body
