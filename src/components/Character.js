// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    width:65%;
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1%;
    color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.white};
    border-radius: 10px;
    font-weight:bolder;
    background-color: ${props => props.theme.primaryColor};
    text-shadow: 1px 1px 5px ${props => props.theme.black};

    @media ${props => props.theme.breakpointMobile} {
        width:95%;
    }

    transition: all 0.4s ease-in-out;
    &:hover {
        transition: all 0.4s ease-in-out;
        background-color: ${props => props.theme.secondaryColor}
    }

    button {
        font-weight: bold;
        text-shadow: 1px 1px 5px ${props => props.theme.white};
        &:hover{
            background-color: ${props => props.theme.tertiaryColor};
            color: ${props => props.theme.white};
            font-weight:normal;
            text-decoration: ${props => props.theme.white} wavy underline;
            -webkit-text-stroke-width: .5px;
            -webkit-text-stroke-color: ${props => props.theme.black};
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
