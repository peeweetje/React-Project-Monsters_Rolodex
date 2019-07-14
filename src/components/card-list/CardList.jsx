import  './card-list.css'

import Card from '../card/Card'
import React from 'react';

const CardList = (props) => {
  const {monsters} = props;
  return ( 
  <div className="card-list">
    {monsters.map(monster => 
      <Card key={monster.id} monster={monster}/>
    )}
  </div>
  )
}

export default CardList;