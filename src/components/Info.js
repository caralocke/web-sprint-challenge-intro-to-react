import axios from 'axios'
import React, {useState, useEffect} from 'react'

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
        <div>
            <h2>Information:</h2>
            {
                info &&
                <>
                    <h3>Name: {info.name}</h3>
                    <li>Year born: {info.birth_year}</li>
                    <li>Gender: {info.gender === 'male' ? `👨 ${info.gender}` : null} {info.gender === 'female' ? `👩 ${info.gender}` : null} {info.gender === 'n/a' ? `🤖 ${info.gender}` : null}</li>
                    <li>Eye color: {info.eye_color}</li>
                    {info.hair_color != 'n/a' ? <li>Hair Color:{info.hair_color}</li> : null}
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
            
        </div>
    )
}

