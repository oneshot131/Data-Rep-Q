import React from 'react';
import MovieItem from './movieItem';

class Movies extends React.Component {

  render() {
    return this.props.myMovies.map((movie)=>{
        console.log(movie);
        // ()=> function splits the data.
       return <MovieItem movie={movie}> </MovieItem>

    });
  }
}

export default Movies;