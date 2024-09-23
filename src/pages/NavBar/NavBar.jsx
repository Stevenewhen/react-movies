import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ user }) {
  return (
    <nav>
      <Link to="/">Movies</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actors</Link>
      {user && (
        <>
          &nbsp; | &nbsp;
          <span>Welcome, {user.name}!</span>
        </>
      )}
    </nav>
  );
}
