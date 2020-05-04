import React, { useState, useEffect } from 'react';

const Search = () => {

  const [search, setSearch] = useState('שועל');
  const [resp, setResp] = useState({});

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
     { 
      resp[0] ? 
        <p>{resp[3][0]}</p>
      :
        <p>לא ידוע</p>
      }
    </div>
  )
}

export default Search;