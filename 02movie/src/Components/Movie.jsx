import '../App.css'

const Movie = (props) => {
  return (
    <div className="cardcon">
        <div className="imgcon"><img src={props.img} alt="movie" /></div>
        <div className="txtcon">
            <h4>{props.title}</h4>
            <h6>Year : {props.year}</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos earum sit itaque magnam deleniti vel.</p>
        </div>
    </div>
  )
}

export default Movie


 {/* <div className="cardcon">
        <div className="imgcon"><img src={props.src} alt="movie" /></div>
        <div className="txtcon">
            <h4>{props.name}</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos earum sit itaque magnam deleniti vel.</p>
        </div>
    </div> */}