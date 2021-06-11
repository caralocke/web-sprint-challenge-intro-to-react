import axios from 'axios';
import React, {useState, useEffect} from 'react'; //imported useState and useEffect
import './App.css';
import Character from './components/Character' //imported Character
import Info from './components/Info' //imported Info
import styled from 'styled-components' //imported styled components

//styling for the app component itself
const StyledApp = styled.div`
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  color: ${props => props.theme.white};

  h1{
    color: ${props => props.theme.white};
    text-shadow: 2px 1px 5px dimgray;

    &:hover{
      color: ${props => props.theme.black};
      text-shadow: 2px 1px 5px ${props => props.theme.white}
    }
  }
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(null)

  //Create a few functions to open and close details when the buttons are clicked

  const openInfo = id => {
    setCurrentCharacter(id)
  }

  const closeInfo = () => {
    setCurrentCharacter(null)
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

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

  return (
    <StyledApp>
      <h1 className="Header">Characters</h1>
      {
        characters.map((character) => {
          return <Character key={character.id} character={character} open={openInfo}/>
        })
      }

      {
        currentCharacter && <Info characterId={currentCharacter.url} close={closeInfo}/>
      }
    </StyledApp>
  );
}

export default App;