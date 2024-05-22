import { useState } from 'react'
import './App.css'
import Header from './Header'
import { useEffect } from 'react';
import { useRef } from 'react';

function Ref() {

  const [Input , setInput] = useState('');
  const [count , setCount] = useState(0);

  const prevState = useRef('');
  const counter = useRef(0);

  useEffect( () => {
    // setCount(count+1); // causes infinite renders, to avoid this use useRef
    prevState.current = Input;
    counter.current = counter.current + 1;
  })

  const formHandler = (e) =>{
    setInput(e.target.value);
  }

  const abc = useRef();

  const clickHandler = () => {
    abc.current.value = "OMKAR";
    abc.current.style.backgroundColor = 'blue'
  }

  return (
    <>
      <div className="b">
        <input type="text" onChange={formHandler} className='it' />
        {/* <h4>Page is renderes {count} times</h4> */}

        <h4>Page is renderes {counter.current} times</h4>

        {/* <h4>Prev State was {prevState.current} </h4> */}
        <br /> <br />

        <input type="text" ref={abc} className='it' />
        <button style={{margin:'10px', height:'50px', position:'relative', bottom:'8px'}} className='btn btn-primary' onClick={clickHandler} >Click Me</button>

      </div>
    </>
  )
}

export default Ref;
