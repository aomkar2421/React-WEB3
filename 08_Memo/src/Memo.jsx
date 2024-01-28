import { useMemo, useState } from "react"

const Mamo = () => {

  const [count , setCount] = useState(0);
  const [name , setName] = useState('');

  const expensivecalculations = (num) => {
    console.log("calculating")
    for (let i = 0; i < 100000000000000000; i++) {
      return num;
    }
  } 

  const calculations = useMemo( () => {
    expensivecalculations(count);
  } , [count] )

  return (
    <div className='b' >
        <input onChange={(e) => setName(e.target.value) } type="text" />
        <h3>{name}</h3>
        <button onClick={ () => {setCount(count+1)} } >INCREMENT</button>
        <h3>{count}</h3>
    </div>
  )
}

export default Mamo