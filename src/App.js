import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(null)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get(`https://swapi.dev/api/people`)
    .then(res => {
      console.log(`App.js res.data`, res.data)
      setCharacters(res.data)
    })
    .catch(err => {
      console.log(`Here's where you messed up: \n`, err)
    })
  },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map((character) => {
          return <Character key={character.id} character={character} />
        })
      }
    </div>
  );
}

export default App;
