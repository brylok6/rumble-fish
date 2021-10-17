import React from 'react';
import classes from "./Card.module.css"

import { Storage as MovieList } from '../pages/Main';


const Card: React.FC<MovieList> = (props) => {
  return(
    <div className={classes.card}>
      {props.children}
    </div>
  )
}

export default Card;