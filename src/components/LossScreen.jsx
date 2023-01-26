export default function LossScreen(props){
  let bestScoreStorage = JSON.parse(localStorage.getItem("best"));

  function onClick(){
    props.setGameLevel(3)
    props.setGameLost(false)
    props.setCurrentScore(0)

    if (
      props.currentScore > bestScoreStorage &&
      props.currentScore > props.bestScore
    ) {
      localStorage.setItem("best", JSON.stringify(props.currentScore));
      props.setBestScore(props.currentScore);
    }
  }

  let newHighScore = props.currentScore > props.bestScore && props.currentScore > bestScoreStorage ? true : false

  return (
    <div className="loss-screen-modul">
      <div className="loss-screen-container">
        <h1>Game Over!</h1> 
        {newHighScore && <h1>You Set a new record!</h1>}
        <h2>Score: {props.currentScore} | Best Score: {bestScoreStorage || props.bestScore} </h2>
        <h3 onClick={onClick} className="loss-screen-play--again">Play Again?</h3>
      </div>
    </div>
  )
}