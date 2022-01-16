import MovieScore from "components/MovieScore";
import { Movie } from "types/movie";


type Props = {
    movie: Movie;
}


function MovieCard({movie}:Props) {    
    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore count={movie.count} score={movie.score}/>
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </div>
        </div>
    );
}

export default MovieCard;