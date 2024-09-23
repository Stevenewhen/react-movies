import { useState, useEffect } from "react";
import "./ActorCard.css";
import { fetchActorDetails } from "../fetchActorDetails/fetchActorDetails";

export default function ActorCard({ actorName }) {
  const [actorDetails, setActorDetails] = useState(null);

  useEffect(() => {
    const fetchActorImage = async () => {
      try {
        const actorDetails = await fetchActorDetails(actorName);
        const imageUrl = actorDetails.profile_path;
        setActorDetails({ name: actorName, imageUrl });
      } catch (err) {
        console.error("Error fetching actor details:", err);
      }
    };

    fetchActorImage();
  }, [actorName]);

  if (!actorDetails) {
    return null;
  }

  return (
    <div className="actor-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${actorDetails.imageUrl}`}
        alt={actorDetails.name}
        className="actor-image"
      />
      <div className="actor-name">{actorDetails.name}</div>
    </div>
  );
}
