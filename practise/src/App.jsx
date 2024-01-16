import { useState } from 'react'
import Fields from './Fields';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [data, setData] = useState([]);

  function addDetails() {
    setData([...data, { name, age }]);
    setName('');
    setAge('');
  }

  return (
    <>
      <div className="abc">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="" placeholder='enter name' />
        <input value={age} onChange={(e) => setAge(e.target.value)} type="text" name="" id="" placeholder='enter age' />
        <button onClick={addDetails} >Add</button>
      </div>
      <div className="def">
        <h4>Name</h4>
        <h4>Age</h4>
        <h4>Remove</h4>
      
        
        <div className="aaaa">
          <div className="cdata">
            {data.map((element, index) => {
              return <Fields key ={index} name = {element.name} age = {element.age}  />
            })}
          </div>
        </div>
      </div>
    </>

  )
}

export default App
