import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {countries.map((country) => {
        const { name, capital, population, flags } = country;
        return <Country />;
      })}
    </div>
  );
};

export default Countries;
