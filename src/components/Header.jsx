export default function Header(props) {
  let bestScoreStorage = JSON.parse(localStorage.getItem("best"));
  return (
    <div className="header--container">
      <h1>Pokemon Memory Game</h1>
      <div>
        <h2>Current Score: {props.currentScore}</h2>
        <h2>Best Score: {bestScoreStorage || props.bestScore}</h2>
      </div>
    </div>
  );
}
