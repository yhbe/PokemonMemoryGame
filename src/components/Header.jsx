export default function Header(props) {
  return (
    <div className="header--container">
      <h1>Pokemon Memory Game</h1>
      <div>
        <h2>Current Score: {props.currentScore}</h2>
        <h2>Best Score: {props.bestScore}</h2>
      </div>
    </div>
  );
}
