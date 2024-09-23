import "./LoginPage.css";

export default function LoginPage({ onLogin }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    const name = evt.target.elements.name.value;
    onLogin(name);
    evt.target.elements.name.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="name" name="name" placeholder="Username" />
      <button type="submit">Login</button>
    </form>
  );
}
