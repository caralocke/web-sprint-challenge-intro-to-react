// Write your Character component here
import React from 'react'

export default function Character({character, open}) {
    return (
        <div>
            {character.name}
            <button onClick={() => open(character)}>Character Info</button>            
        </div>
    )
}
