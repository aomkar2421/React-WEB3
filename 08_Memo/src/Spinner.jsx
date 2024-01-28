import {useState,useEffect} from 'react'
import {ThreeCircles} from 'react-loader-spinner'
import {ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Spinner = () => {
    const[loading , setLoading] = useState(false);
    const[data , setData] = useState([]);

    useEffect( () => {
        setLoading(true);
        async function getData(){
            let call = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001`)
            let response = await call.json();
            setData(response);
            setLoading(false);
            toast.success("Succesfully Data Fetched to avoid multi toast remove <React.StrictMode> ")
            toast.dark("Succesfully Data Fetched")
            toast.warning("Succesfully Data Fetched")
        }
        getData();
    },[])

    return(
        <>
            <ToastContainer/>
            <div className="b" style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'   }}>
            {   loading ? <ThreeCircles color='black' height='40px' /> : 
                data.map( (element , index) => {
                    return(
                        <div key={index} className="fd">
                            <h6>{element.email}</h6>
                        </div>
                    )
                } )
            }
        </div>
        </>
    )

}

export default Spinner