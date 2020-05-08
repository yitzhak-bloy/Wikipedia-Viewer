import React from 'react';
// import logo from './logo.svg';
import Search from './Search';
import './App.css';

const  App = () => {
  return (
    <div className="App">
      <h2>מציג ויקפדיה</h2>
      <p className='subtitle'> !כל דף ויקפדיה שאתה רוצה</p>
      <a href="https://he.wikipedia.org/wiki/Special:Random" rel="noopener noreferrer" target="_blank" className="random" >
        יותר מזל משכל
      </a> 
      <Search />
    </div>
  );
}

export default App;