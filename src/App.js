import React from 'react';
// import logo from './logo.svg';
import Search from './Search';
import './App.css';

const  App = () => {
  return (
    <div className="App">
      <h1>מציג ויקפדיה</h1>
      <a href="https://he.wikipedia.org/wiki/Special:Random" rel="noopener noreferrer" target="_blank" >
        דף אקראי
      </a> 
      <Search />
    </div>
  );
}

export default App;