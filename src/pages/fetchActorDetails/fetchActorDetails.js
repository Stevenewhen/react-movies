import axios from "axios";

const TMDB_API_KEY = "fed170a8f3c40cb5e1150dc9057c784d";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function fetchActorDetails(actorName) {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/person`, {
      params: {
        api_key: TMDB_API_KEY,
        query: actorName,
      },
    });

    console.log("Response data:", response.data);

    const actor = response.data.results[0];

    if (!actor) {
      throw new Error("Actor not found");
    }

    return actor;
  } catch (err) {}
}
