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

  function removeData(index) {
    let newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  return (
    <>

      <button onClick={function A (){alert("abc")}} >CLICK</button>

      <div className="abc">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="" placeholder='enter name' />
        <input value={age} onChange={(e) => setAge(e.target.value)} type="text" name="" id="" placeholder='enter age' />
        <button onClick={addDetails} >Add</button>
      </div>

      <div className="data">
        <div className="def">
          <h4>Name</h4>
          <h4>Age</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          
          {/* return <Fields key={index} name={element.name} age={element.age} remove={() => removeData(index)  } /> */}
          //OR

          return (
            <div className="def" key={index}>
              <h6>{element.name}</h6>
              <h6>{element.age}</h6>
              <h6><input type="button" value="REMOVE" onClick={removeData} /></h6>
            </div>
          )

        })}
      </div>
    </>

  )
}

export default App
