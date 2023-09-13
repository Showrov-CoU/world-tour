import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const visitedCountriesHandler = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Countries:{countries.length}</h3>
      <h2 style={{ marginLeft: "15px" }}>
        List of Visited Countries:{visitedCountries.length}
      </h2>
      <div>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            visitedCountriesHandler={visitedCountriesHandler}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
