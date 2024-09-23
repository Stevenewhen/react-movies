import MovieCard from "../MovieCard/MovieCard";
import "./MovieListPage.css";

export default function MoviesListPage({ movies }) {
  return (
    <div className="movie-list-wrapper">
      <div className="movie-list-container">
        {movies.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} />
        ))}
      </div>
    </div>
  );
}
