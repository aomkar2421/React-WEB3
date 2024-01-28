import {useState , useEffect} from 'react'
import useFetch from './useFetch';

const Custom = () => {

    const [data] = useFetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=1001`);

    // commented bcz we have use custom hook
    // const[data , setData] = useState([]);

    // useEffect( () => {
    //     async function getData(){
    //         let call = await fetch(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`)
    //         let response = await call.json();
    //         setData(response);
    //         console.log(response)    
    //     }
    //     getData();
    // },[])

  return (
    <div className='b'>
        {
            data.map( (element , index) => {
                return(
                    <div key={index} className="fd">
                        <h4>{element.id}</h4>
                        <h4>{element.firstName}</h4>
                        <h4>{element.age}</h4>
                        <h4>{element.address}</h4>
                    </div>
                )
            } )
        }
    </div>
  )
}

export default Custom