import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {countries.map((country) => {
        return <Country country={country} />;
      })}
    </div>
  );
};

export default Countries;
