import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const { title, posterPath, releaseDate, cast } = movie;
  const releaseYear = new Date(releaseDate).getFullYear();
  const castList = cast.slice(0, 3).join(", ");

  return (
    <Link to={`/movies/${title}`} className="movie-card">
      <img src={posterPath} alt={title} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">
          {title} <span className="release-year">({releaseYear})</span>
        </h2>
        <p className="cast">Cast: {castList}</p>
      </div>
    </Link>
  );
}
