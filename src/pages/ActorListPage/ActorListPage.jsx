import { Link } from "react-router-dom";
import ActorCard from "../ActorCard/ActorCard";
import "./ActorListPage.css";

export default function ActorListPage({ movies }) {
  let actorsArray = [];

  movies.forEach((movie) => {
    movie.cast.forEach((actor) => {
      actorsArray.push(actor);
    });
  });

  // Create a set from the actorsArray to remove duplicates *Hint
  const actorsSet = new Set(actorsArray);

  // Create an array from the set *Hint
  const uniqueActorsArray = Array.from(actorsSet);

  return (
    <div className="actor-scrollbox">
      {uniqueActorsArray.map((actor, idx) => (
        <Link key={idx} to={`/actors/${actor}`}>
          <ActorCard actorName={actor} />
        </Link>
      ))}
    </div>
  );
}
