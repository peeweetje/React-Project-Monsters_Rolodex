import  './card-list.css'

import Card from '../card/Card'
import React from 'react';

const CardList = (props) => {
  const {monsters, className} = props;
 
  return ( 
  <div className={className}>
    {monsters.map(monster => 
      <Card className="card-container" key={monster.id} monster={monster}/>
    )}
  </div>
  )
}

export default CardList;