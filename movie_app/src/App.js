import React from 'react';


function Hate(fav){
return <h1>motherfucker{fav}</h1>
}


function App() {
  return (
    <div className="App">
      <h3>hello!!</h3>
      <Hate  fav="satans" />
    </div>
  );
}

export default App;

