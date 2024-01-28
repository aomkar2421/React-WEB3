import { useCallback, useState } from "react"
import Todo from './Todo'
const Callback = () => {

  const [count , setCount] = useState(0);
  const [todo , setTodo] = useState([]);

  const addTodo = useCallback( () => {
    setTodo( (t) => [...t , 'New Todo'] );
  },[] )
  
  return (
    <div className='b' >
        <div>
          <button onClick={ () => {setCount(count+1)} } >INCREMENT</button>
          <h3>{count}</h3>
        </div>

        <hr />

        <Todo todo={todo} addTodo={addTodo} />
    </div>
  )
}

export default Callback