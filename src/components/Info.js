import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function Info(props) {
    const {characterId} = props
    const [info, setInfo] = useState(null)

    useEffect(() => {
        axios
        .get(`${characterId}`)
        .then(res => {
            console.log(`Info res.data:`, res.data)
            setInfo(res.data)
        })
        .catch(err => {
            console.log(`Here's where you messed up:\n`, err)
        })
    },[characterId])
    return (
        <div>
            <h2>Information about {info.name}</h2>
        </div>
    )
}
