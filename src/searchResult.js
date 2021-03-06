import React from "react";
import "./searchResult.css";

const SearchResult = ({ resp }) => {
  let names = resp[1];
  const urls = resp[3];

  return (
    <div className='results'>
      {names.map((name) => (
        <div key={name}>
          <a
            href={urls[names.indexOf(name)]}
            rel='noopener noreferrer'
            target='_blank'
          >
            <h2 className='result'>{name}</h2>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
