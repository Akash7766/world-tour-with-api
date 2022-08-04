import React from "react";

const Country = ({ country }) => {
  const { name, capital, population, flags } = country;

  return (
    <div className="card card-compact bg-base-100 hover:bg-base-300 transition-all shadow-md flex flex-col justify-between">
      <div className="p-3">
        <img className="w-full rounded-sm" src={flags.png} alt="Shoes" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{name.common}!</h2>
        <div>
          <p>Capital : {capital}</p>
          <p>Population : {population}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
