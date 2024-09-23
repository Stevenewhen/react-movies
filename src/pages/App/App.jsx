import LoginPage from "../LoginPage/LoginPage";
import NavBar from "../NavBar/NavBar";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import MoviesDetailPage from "../MoviesDetailPage/MoviesDetailPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import ActorDetailPage from "../ActorDetailPage/ActorDetailPage";
import { movies } from "../data.js/data.js";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../App/App.css";
import "../MovieCard/MovieCard.css";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser({ name: username });
  };

  return (
    <main className="App">
      <div className="logo-container">
        <img src="https://i.imgur.com/P83YGZv.png" alt="React Movies" />
      </div>
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MoviesDetailPage />} />
            <Route path="/actors" element={<ActorListPage movies={movies} />} />
            <Route
              path="/actors/:actorName"
              element={<ActorDetailPage movies={movies} />}
            />
          </Routes>
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </main>
  );
}
