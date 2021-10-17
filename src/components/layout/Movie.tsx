import React, { useState } from 'react';
import classes from "./Movie.module.css"

import { Storage as MovieList } from '../pages/Main';
import Card from './Card';

const Movie: React.FC<MovieList> = ({ data }) => {

  const [movieStatusMap, setMovieStatusMap] = useState<Record<string, boolean | undefined>>({})

  const getStatus = (id: string, activeStatus: string, activeWhen: boolean): string => {
    const decision = movieStatusMap[id]
    return decision === activeWhen ? activeStatus : "white"
  }

  const moviePickHandler = (decision: boolean, id: string,): void => {
    setMovieStatusMap((map) => ({
      ...map,
      [id]: decision
    }));

    if (decision === true) {
      fetch(
        `https://somedatabase/recommendations/${id}/accept`,
        {
          method: 'PUT',
          body: JSON.stringify(id),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    } else if (decision === false) {
      fetch(
        `https://somedatabase/recommendations/${id}/rejected`,
        {
          method: 'PUT',
          body: JSON.stringify(id),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

    }
  }

  return (
    <div>
      <div className={classes.movie}>
        {data.map((movie) => {
          return (
            <div style={{ display: getStatus(movie.id, 'none', false) }} key={movie.id}>
              <div style={{ display: getStatus(movie.id, 'none', true) }} key={movie.id}>
                <Card data={data}>
                  <h2>{`${movie.title}, Ocena: ${movie.rating}/10`}</h2>
                  <div><img className={classes.img} src={movie.imageURL} /></div>
                  <button onClick={() => moviePickHandler(true, movie.id)}>Add</button>
                  <button onClick={() => moviePickHandler(false, movie.id)}>Reject</button>
                </Card>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Movie;