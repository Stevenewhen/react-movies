import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { movies } from "../data.js/data.js";
import { fetchActorDetails } from "../fetchActorDetails/fetchActorDetails";
import "./MoviesDetailPage.css";

export default function MoviesDetailPage() {
  const { movieName } = useParams();
  const movie = movies.find((el) => el.title === movieName);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const actorPromises = movie.cast.map(async (actorName) => {
          return fetchActorDetails(actorName);
        });
        const actorsData = await Promise.all(actorPromises);
        setActors(actorsData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchActors();
  }, [movie]);

  return (
    <div className="movie-details-container">
      <div className="title-container">
        <h2>{movie.title}</h2>
        <span className="release-year">
          ({new Date(movie.releaseDate).getFullYear()})
        </span>
      </div>
      <img src={movie.posterPath} alt={movie.title} className="poster-image" />
      <h3>Cast:</h3>
      <div className="actors-container">
        {actors.map((actor, idx) => (
          <div key={idx} className="actor-item">
            <Link to={`/actors/${actor.name}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className="actor-image"
              />
              <div className="actor-info">{actor.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
