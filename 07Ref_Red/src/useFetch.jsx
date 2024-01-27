import {useState , useEffect} from 'react'

const useFetch = (url) => {
    const[data , setData] = useState([]);

    useEffect( () => {
        async function getData(){
            let call = await fetch(url)
            let response = await call.json();
            setData(response);
            console.log(response)
        }
        getData();
    },[])

    return [data]
}

export default useFetch