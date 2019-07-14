import './Card.css'

import React from 'react'

const Card = (props) => {
    const {monster, className} = props
    return(
    <div className={className}>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2$size=180x180`}/>
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
    )
}

export default Card;