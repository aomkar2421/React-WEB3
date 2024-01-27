import React, { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const abc = async () => {
      let response = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=1001`);
      let fdata = await response.json();
      setData(fdata);
      console.log(fdata)
    }
    abc();
  }, [count])


  // const increment = () => {
  //   setCount(count + 1);
  // }

  return (
    <div className='b'>
      <button onClick={() => { setCount(count + 1) }} >INCREMENT</button>
      <h1>{count}</h1>
          {data.map( (element , index) =>{
            return(
              <Link to={`/${element.id}`}> 
                <div key={index} className="fd">
                  <h4>{element.id}</h4>
                  <h4>{element.firstName}</h4>
                  <h4>{element.age}</h4>
                  <h4>{element.address}</h4>
                </div>
              </Link>
            )
          } )}
    </div>
  )
}

export default Home