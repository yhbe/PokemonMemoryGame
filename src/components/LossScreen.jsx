export default function LossScreen(props){
  function onClick(){
    props.setGameLevel(3)
    props.setGameLost(false)
    props.setCurrentScore(0)
  }

  return (
    <div className="loss-screen-modul">
      <div className="loss-screen-container">
        <h1>Game Over!</h1> 
        <h2>Score: {props.currentScore} | Best Score: {props.bestScore} </h2>
        <h3 onClick={onClick} className="loss-screen-play--again">Play Again?</h3>
      </div>
    </div>
  )
}