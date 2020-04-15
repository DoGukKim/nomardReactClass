import React from 'react';


function Movie({name,pic}){
return <div>
  <h1>I like {name}</h1>
  <img src={pic} />
</div>
}

const movieLike = [
  {
    name:"starwars",
    image:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
  },
  {
    name:"toystory",
    image:"https://d2lzb5v10mb0lj.cloudfront.net/covers/600/30/3004625.jpg"
  },
  {
    name:"harrypoter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6CJFJXYA7prvfjZh42a0uNA0fEOvQzS3XtW8QAfTRmWuzg2EB&usqp=CAU"
  }
]

function App() {
  return (
    <div className="App">
      {movieLike.map(kindOf=> <Movie name={kindOf.name} pic={kindOf.image} />)}
    </div>  
  );
}

export default App;

