// Write your Character component here
import React from 'react'

export default function Character(props) {
    const {character, open} = props
    return (
        <div>
            {character.name}
            <button onClick={open}>Character Info</button>            
        </div>
    )
}
