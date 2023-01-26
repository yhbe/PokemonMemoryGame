import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Playerboard from "./components/playerBoard";
import React from "react";
import LossScreen from "./components/LossScreen";

function App() {
  const [gameLost, setGameLost] = React.useState(false)
  const [gameLevel, setGameLevel] = React.useState(3);
  const [currentScore, setCurrentScore] = React.useState(0)
  const [bestScore, setBestScore] = React.useState(0)

  return (
    <>
      <Header
        setCurrentScore={setCurrentScore}
        currentScore={currentScore}
        setBestScore={setBestScore}
        bestScore={bestScore}
      />
      <Playerboard
        gameLost={gameLost}
        setGameLost={setGameLost}
        gameLevel={gameLevel}
        setGameLevel={setGameLevel}
        setCurrentScore={setCurrentScore}
        currentScore={currentScore}
        setBestScore={setBestScore}
        bestScore={bestScore}
      />
      {gameLost && (
        <LossScreen
          bestScore={bestScore}
          setCurrentScore={setCurrentScore}
          setGameLevel={setGameLevel}
          setGameLost={setGameLost}
          currentScore={currentScore}
        />
      )}
      <div className="credits">
        <a href="https://unsplash.com/@introspectivedsgn">
          Photo by Erik Mclean - Unsplash
        </a>
        <a
          href="https://www.flaticon.com/free-icons/card-game"
          title="Card game icons"
        >
          Favicon created by mangsaabguru - Flaticon
        </a>
      </div>
    </>
  );
}

export default App;
