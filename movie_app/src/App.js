import React from 'react';
import propTypes from "prop-types";

function Movie({name,pic,rating}){
  return <div>
    <h1>I like {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={pic} alt={name} />
  </div>
  }
  
  const movieLike = [
    {
      id:1,
      name:"starwars",
      image:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg",
      rating:5
    },
    {
      id:2,
      name:"toystory",
      image:"https://d2lzb5v10mb0lj.cloudfront.net/covers/600/30/3004625.jpg",
      rating:4.8
    },
    {
      id:3,
      name:"harrypoter",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6CJFJXYA7prvfjZh42a0uNA0fEOvQzS3XtW8QAfTRmWuzg2EB&usqp=CAU",
      rating:4
    }
  ]
  
  function App() {
    return (
      <div className="App">
        {movieLike.map(movieList=> <Movie key={movieList.id} name={movieList.name} pic={movieList.image} rating={movieList.rating} />)}
      </div>  
    );
  }
export default App;

