import './App.css'

const Fields = ({name , age , remove}) => {
  return (
    <div className='def'>
        <h6>{name}</h6>
        <h6>{age}</h6>
        <h6><input type="button" value="REMOVE" onClick={remove} /></h6>
    </div>
  )
}

export default Fields