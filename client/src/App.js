import React, { useState } from 'react';
import { Route, NavLink } from "react-router-dom";
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import MustWatch from'./Movies/MustWatch';
import SavedList from './Movies/SavedList';


const App = () => {
  const [savedList, setSavedList] = useState( [] );
  

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
const toMW =()=>{
  return console.log('crap')
}
  return (
    <div>
      <SavedList list={savedList} />
      <NavLink to='/MustWatch' className='home-button'>kleek here for movies you should really watch</NavLink>
     
      <div>
        <Route path='/' exact component={MovieList}/>
        <Route path='/movies/:id'component={Movie}/>
        <Route path='/MustWatch' component={MustWatch}/>
      </div>
    </div>
  );
};

export default App;
