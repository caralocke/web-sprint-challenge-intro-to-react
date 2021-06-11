// Write your Character component here
import React from 'react'

export default function Character(props) {
    const {character} = props
    return (
        <div>
            {character.name}            
        </div>
    )
}
