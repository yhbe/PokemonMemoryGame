import React from "react";
export default function Playerboard() {
  const [pokemon, setPokemon] = React.useState([]);
  const [currentPokemon, setCurrentPokemon] = React.useState([]);
  const [gameLevel, setGameLevel] = React.useState(5);

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151'")
      .then((res) => res.json())
      .then((data) => setPokemon(data.results))
      .then(() => {
          setPokemon(prevState => {
            return prevState.map((pokemon,index) => {
              return {
                ...pokemon,
                url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  index + 1
                }.png`,
              };
            })
          })
      })
    }, []);
    
    let randomPokemonArray = (function getRandomPokemon(){
      if (!pokemon[0]) return "Not ready"
      let arr = []
      for (let i = 0; i < gameLevel; i++){
        let randomNumber = Math.trunc(Math.random() * 151)
        let notInArr = false
        //No duplicate pokemon on page
        arr.map(a => {
          if (a.name === pokemon[randomNumber].name){
            notInArr = true
          }
        })
        notInArr ? i-- : arr.push(pokemon[randomNumber]);
      }
      return arr
    })()

    if (pokemon[0]) {
      randomPokemonArray = randomPokemonArray.map(pokemon => {
        return (
          <div key={pokemon.name} className="pokemon--container">
             <h1>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
             <img src={pokemon.url} alt="pokemon" />
          </div>
        );
      })

    }

return (
  <div className="playerboard--container">
    <img src="" alt="" />
    <div className="grid--">{randomPokemonArray}</div>
  </div>
);
}
