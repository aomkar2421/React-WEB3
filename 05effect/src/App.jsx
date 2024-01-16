import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const empolyeeData = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=1001`);
      let a = await empolyeeData.json();
      setData(a);
      console.log(a);
    }
    getData();
    document.title=`${count} employees online`
  }, [count])


  function increment() { 
    setCount(count + 3);
  }

  return (
    <>
      <button onClick={increment} >increment</button>
      <h3>{count}</h3>
      {
        data.map( (element , index) => {
          return(
            <div key={index} style={{ display:'flex', flexDirection:'row', width:'500px', justifyContent:'space-between', margin:'auto'}}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.age}</h4>
            <h4>{element.contactNumber}</h4>
            </div>
          )
        })
      }
    </>
  )
}

export default App
