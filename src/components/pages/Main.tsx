import React, { useState } from 'react';
import Movie from '../layout/Movie';


export interface Storage {
  data: {
    id: string
    imageURL: string
    title: string
    summary: string
    rating: number
    children?: React.ReactNode
  }[]
}
// const data = fetch(
//   'https://somedatabase/recommendations')
//   .then ((response) => {
//     return response.json()
//   })

export const movieData =
  [
    {
      id: "1and3011",
      imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      title: "Inferno",
      summary: "Lorem ipsum",
      rating: 5.3,
    },
    {
      id: "2301abc",
      imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
      title: "“Star Wars: Episode VII - The Force Awakens",
      summary: "Lorem ipsum…",
      rating: 8.2,
    }
  ]


function Main() {
  const [data, setData] = useState<Storage["data"]>(movieData)


  return (
    <Movie data={data} />
  )
}

export default Main