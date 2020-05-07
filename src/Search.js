import React, { useState, useEffect } from 'react';
import SearchResult from './searchResult';

const Search = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('')
  const [resp, setResp] = useState({});

  const handleChange = (sentence) => {
    setInput(sentence.target.value);
  };

  const handleClick = () => {
    setSearch(input)
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
      <h1>חיפוש</h1>
      <input 
        type="string" 
        name="quantity"           
        onChange={handleChange}
        className='inputRomanNumeralConverter'
      />  
      <button onClick={handleClick} >חפש</button>
     { 
      resp[0] ? 
          <SearchResult resp={resp} />
      :
        <p>" חפש או בחר " יותר מזל משכל</p>
      }
    </div>
  )
}

export default Search;