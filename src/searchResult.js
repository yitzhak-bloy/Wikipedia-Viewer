import React, { useState, useEffect } from 'react';

const SearchResult = ({ resp }) => {
  let names = resp[1];
  const urls = resp[3];

  return (
    <div>
        <h1>אני כאן</h1>
          {names.map(name => (
          <h2>{name}</h2>
          ))}
    </div>
  )
}

export default SearchResult;