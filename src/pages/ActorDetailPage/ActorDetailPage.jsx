import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data.js/data.js";
import { Link } from "react-router-dom";
import { fetchActorDetails } from "../fetchActorDetails/fetchActorDetails";
import "./ActorDetailPage.css";

export default function ActorDetailPage() {
  const { actorName } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    const fetchActor = async () => {
      try {
        const actorDetails = await fetchActorDetails(actorName);
        setActor(actorDetails);
      } catch (err) {
        console.error(err);
      }
    };

    fetchActor();
  }, [actorName]);

  const actorMovies = movies.filter((movie) => movie.cast.includes(actorName));

  return (
    <div>
      {actor && (
        <>
          <h1>{actor.name}</h1>
          <img
            className="actor-img-detail"
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
          />
          <h2>Movies:</h2>
          <table className="actor-movies-table">
            <tbody>
              {actorMovies.map((movie, idx) => (
                <tr key={idx}>
                  <td className="movie-poster">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
                      alt={movie.title}
                    />
                  </td>
                  <td className="movie-details">
                    <div>
                      <Link to={`/movies/${movie.title}`}>{movie.title}</Link>
                      <span className="release-year">
                        ({new Date(movie.releaseDate).getFullYear()})
                      </span>
                    </div>
                    <div>
                      <span className="cast-label">Cast:</span>{" "}
                      {movie.cast.slice(0, 3).join(", ")}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
