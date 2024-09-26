// Write your Character component here
import React from 'react'
import styled, { keyframes} from 'styled-components' //imported styled components and keyframes

const kf = keyframes`
    50%{
        transform: scale(0.8)
    }
    100%{
        opacity:1;
        transform: scale(1)
    }
`

//styling for the div that contains my character name and the button to open their info
const StyledCharacter = styled.div` 
    width:65%;
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1%;
    color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.white};
    border-radius: 10px;
    font-weight:bold;
    background-color: ${props => props.theme.primaryColor};
    text-shadow: 1px 1px 5px ${props => props.theme.black};

    @media ${props => props.theme.breakpointMobile} {
        width:95%;
    }

    animation: ${kf} 0.4s ease-in-out forwards;

    transition: all 0.4s ease-in-out;
    &:hover {
        transition: all 0.4s ease-in-out;
        background-color: ${props => props.theme.secondaryColor};
        color: ${props => props.theme.black};
        border: 1px solid ${props => props.theme.black};
        font-weight: bolder;
        text-shadow: 1px 1px 5px ${props => props.theme.white};
    }
    //styling for the button itself
    button {
        font-weight: bold;
        text-shadow: 1px 1px 5px ${props => props.theme.white};
        &:hover{
            background-color: ${props => props.theme.tertiaryColor};
            color: ${props => props.theme.white};
            text-decoration: ${props => props.theme.white} underline;
            transform: scale(1.1);
        }
    }
`

export default function Character({character, open}) {
    return (
        <StyledCharacter>
            {character.name}
            <button onClick={() => open(character)}>Character Info</button>            
        </StyledCharacter>
    )
}
