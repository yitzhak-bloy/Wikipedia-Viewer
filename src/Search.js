import React, { useState, useEffect } from 'react';
import SearchResult from './searchResult';
import './Search.css'

const Search = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('')
  const [resp, setResp] = useState({});

  const handleChange = (sentence) => {
    setInput(sentence.target.value);
  };

  const handleClick = () => {
    setSearch(input);
  }

  const handleKeyPress = (e) => {
    if(e.which === 13) {
      setSearch(input);
    }
  }

  useEffect(() => {
    fetchData();
  }, [search])

  const fetchData = () => {
    fetch(`https://he.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${search}`)
    .then(response => response.json())
    .then((resJson) =>{
      console.log(resJson, 'resJson')  
      setResp(resJson)
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <input 
        type="string" 
        onChange={handleChange}
        className='input'
        dir="rtl"
        placeholder={'הקש לחיפוש'}
        onKeyPress={handleKeyPress}
      />  
      <h1></h1> 
      <button onClick={handleClick} >חפש</button>
     { 
      resp[0] ? 
          <SearchResult resp={resp} />
      :
        null
      }
    </div>
  )
}

export default Search;