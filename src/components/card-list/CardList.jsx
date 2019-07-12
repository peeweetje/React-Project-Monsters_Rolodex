import  './card-list.css'

import React from 'react';

const CardList = (props) => {
    console.log(props)
  return ( <div className="card-list">{props.children}</div>)

}

export default CardList;