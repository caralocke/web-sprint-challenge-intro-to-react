import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character'
import Info from './components/Info'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(null)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const openInfo = (id) => {
    setCurrentCharacter(id)
  }

  const closeInfo = () => {
    setCurrentCharacter(null)
  }
  useEffect(() => {
    axios
    .get(`https://swapi.dev/api/people`)
    .then(res => {
      setCharacters(res.data)
    })
    .catch(err => {
      console.log(`Here's where you messed up:\n`, err)
    })
  },[])
  console.log('characters:', characters)

  console.log(`characters:`, characters)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map((character) => {
          return <Character key={character.id} character={character} open={openInfo}/>
        })
      }

      {
        currentCharacter && <Info characterId={currentCharacter.url} close={closeInfo}/>
      }
    </div>
  );
}

export default App;
