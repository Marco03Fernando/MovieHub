import "../css/Favourites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favourites() {
    const {favourites} = useMovieContext()	

    if (favourites) {
        return (
        <div className="favourites">
            <h2>Favourite Movies</h2>
        <div className="movies-grid">
        {favourites.map
        ((movie) => 
             ( 
            <MovieCard movie={movie} key={movie.id} /> 
            ))}
    </div>
    </div>
     );
    }
    

    return <div className="favourites-empty">
       <h2>No favourite movies yet</h2>
       <p>start adding movies to your favourites and they will appear here</p>

    </div>
}

export default Favourites