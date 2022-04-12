import React from "react";

function Counrty({ country }) {
  return (
    <div className="ele">
     
      <h1> Name : {country.name}</h1>
      <h1> Capital : {country.capital}</h1>
      <a href={country.sourceUrl} className="img-wrapper">
        <img src={country.flagUrl} alt={country.name}></img>
      </a>
    </div>
  );
}

export default Counrty;
