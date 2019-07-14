import './Card.css'

import React from 'react'

const Card = (props) => {
    const {monster} = props
    return(
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4$size=180x180`}/>
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
    )
}

export default Card;