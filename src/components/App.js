import React from 'react';
import {data} from '../data'; 
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { type } from '@testing-library/user-event/dist/type';

class App extends React.Component { 
  componentDidMount(){
    const {store}=this.props
    //after dispathing subsribe callbak will be called then other thing
    store.subscribe(()=>{
      console.log('UPDATED');
      //we should not use foreupdate because it is used for forcefully update app component
      this.forceUpdate();
    });
    //make api call to get the movie
    //dispatch the action
    //but currently we are not making an api call so let's dispatch
    store.dispatch({
      type: 'ADD_MOVIES',
      movies:data
    });

    console.log('STATE',this.props.store.getState());

  }
  render(){
  const movies=this.props.store.getState();
  consolelog('Render')
  return (
    <div className="App">
    <Navbar />
    <div className="main">
      <div className="tabs">
       <div className="tab">Movies</div> 
       <div className="tab">Favorites</div> 
      </div>
      <div className="list">
        {movies.map((movie,index) => (
          <MovieCard movie={movie} key={`movies-${index}`} />
        ))}
      </div>
    </div>
    </div>
  );
}
}

export default App;
