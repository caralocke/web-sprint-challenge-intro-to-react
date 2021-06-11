import axios from 'axios' //imported axios
import React, {useState, useEffect} from 'react' //imported React, useState, and useEffect
import styled, { keyframes } from 'styled-components' //imported styled components and keyframes

const rotateOpen = keyframes`
    from{
        transform: rotate(180deg)
    }

    to{
        transform: rotate(360deg)
    }
`
const rotateClose = keyframes`
    from{
        transform: rotate(360deg)
    }
    to{
        transform: rotate(180deg)
    }
`
// styling for the info component that shows up when the 'Character Info' button is clicked
const StyledInfo = styled.div`
    width: 67%;
    background-color: ${props => props.theme.primaryColor};
    margin: 0 auto;
    border: 1px solid ${props => props.theme.white};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media ${props => props.theme.breakpointMobile} {
        width:96.5%;
    }

    animation: ${rotateOpen} 0.7s linear;

    transition: all 0.4s ease-in-out;
    &:hover{
        transition: all 0.4s ease-in-out;
        background-color: ${props => props.theme.secondaryColor};
        font-weight: bold;
    }

    button {
        font-weight: bold;
        text-shadow: 1px 1px 5px ${props => props.theme.white};

        &:hover {
            background-color: ${props => props.theme.tertiaryColor};
            color: ${props => props.theme.white};
            transform: scale(1.1);
            text-decoration: ${props => props.theme.white} underline;
        }
    }
`

export default function Info(props) {
    const {characterId, close} = props
    const [info, setInfo] = useState(null)

    useEffect(() => {
        axios
        .get(`${characterId}`)
        .then(res => {
            console.log('res.data for Info.js', res.data)
            setInfo(res.data)
        })
        .catch(err => {
            console.log(`Here's where you messed up:\n`, err)
        })
    },[characterId])


    return (
        <StyledInfo>
            <h2>Information:</h2>
            {
                info &&
                <>
                    <h3>Name: {info.name}</h3>
                    <li>Year born: {info.birth_year}</li>
                    <li>Gender: {info.gender === 'male' ? `👨 ${info.gender}` : null} {info.gender === 'female' ? `👩 ${info.gender}` : null} {info.gender === 'n/a' ? `🤖 ${info.gender}` : null}</li>
                    <li>Eye color: {info.eye_color}</li>
                    {info.hair_color !== 'n/a' ? <li>Hair Color: {info.hair_color}</li> : null}
                    <br></br>
                    {info.gender === 'male' ? 'His' : null} {info.gender === 'female' ? 'Her' : null} {info.gender === 'n/a' ? 'Their' : null} most popular films are:
                    <ul>
                        {
                            info.films.map((film, idx) => <li key={idx}>{film}</li>)
                        }
                    </ul>

                    <button onClick={close}>Close</button>
                </>
            }
            
        </StyledInfo>
    )
}

