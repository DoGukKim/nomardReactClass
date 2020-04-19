import React from 'react';
import axios from 'axios';

class App extends React.Component{
state = {
  isLoading: true,
  moive:[]
}

getMovie = async() => {
  const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")

}


componentDidMount(){
  this.getMovie()
}

render(){
  const {isLoading} = this.state;
return <div>{isLoading ? "Loading now.." : "We are ready"}</div>
}
}

export default App;
