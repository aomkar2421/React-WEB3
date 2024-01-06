import './App.css'
import { Header } from './Components/Header'
import Movie from './Components/Movie'
import movies from '../movies.json'

function App() {

  return (
    <div className="container">
      <Header />
      <div className="cards">
        {
          movies.map((element) => (
            <Movie
              title={element.Title}
              year={element.Year}
              img={element.Poster}
              key={element.id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App


{/* <div className="cards">
        <Movie name="DRACULA" src="https://wallpapercave.com/dwp2x/wp8525542.jpg"/>
        <Movie name="DARK KNIGHT" src="https://wallpapercave.com/dwp2x/wp1934740.jpg"/>
        <Movie name="AFTER EARTH" src="https://wallpapercave.com/dwp2x/wp10387943.jpg"/>
        <Movie name="JURASSIC WORLD" src="https://wallpapercave.com/dwp2x/wp10387945.jpg"/>
        </div>

        <div className="cards">
        <Movie name="Dark" src="https://wallpapercave.com/dwp2x/wp9875927.jpg"/>
        <Movie name="Dark" src="https://wallpapercave.com/dwp2x/wp3551228.jpg"/>
        <Movie name="Dark" src="https://wallpapercave.com/dwp2x/wp9496409.jpg"/>
        <Movie name="Dark" src="https://wallpapercave.com/dwp2x/wp9875959.jpg"/>
        </div> */}