import React from "react";
export default function Playerboard(props) {
  const [pokemon, setPokemon] = React.useState([]);
  const [pokemonList, setPokemonList] = React.useState([])
  const [selectedPokemonArr, setSelectedPokemonArr] = React.useState([])

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

    React.useEffect(() => {
      if (!props.gameLost){
        setPokemonList([])
        setSelectedPokemonArr([])
        getRandomPokemon()
      }
    }, [props.gameLost])

    let randomPokemonArray = getRandomPokemon()
    function getRandomPokemon(){
      if (!pokemon[0]) return 
      if (pokemonList.length > 0) return 
      let arr = []
      for (let i = 0; i < props.gameLevel; i++){
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
      setPokemonList(arr)
    }


    if (pokemon[0]) {
      randomPokemonArray = pokemonList.map(pokemon => {
        return (
          <div key={pokemon.name} 
          onClick={onClick}
          className="pokemon--container">
             <h1>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
             <img src={pokemon.url} alt="pokemon" />
          </div>
        );
      })
    }


    function onClick(event){
      if (
        selectedPokemonArr.includes(
          event.target.parentElement.children[0].innerText
        ) 
      ) {
        props.setGameLost(true)
      } else {
        setSelectedPokemonArr(prevState => {
          return [
            ...prevState,
            event.target.parentElement.children[0].innerText,
          ];
        })
        props.setCurrentScore(prevState => prevState + 1)
        if (selectedPokemonArr.length + 1 === pokemonList.length){
          setPokemonList([])
          setSelectedPokemonArr([])
          props.setGameLevel(prevState => prevState + 2)
          getRandomPokemon()
        } else {
        randomSet(pokemonList);
        }
      }
    }

    function randomSet(arr) {
      let newArr = [];
      while (arr.length > 0) {
        let randomNum = Math.trunc(Math.random() * arr.length);
        newArr.push(arr[randomNum]);
        arr.splice(
          arr.findIndex((a) => a === arr[randomNum]),
          1
        );
      }
      setPokemonList(newArr)
    }

return (
  <div className="playerboard--container">
    <img src="" alt="" />
    <div className="grid--">{randomPokemonArray}</div>
  </div>
);
}



