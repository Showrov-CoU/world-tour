import { useState } from "react";
import "./Country.css";
import CountryData from "../CountryData/CountryData";
const Country = ({ country, visitedCountriesHandler }) => {
  //   console.log(country);
  const { name, flags, population, area, cca2 } = country;

  const [visited, setVisited] = useState(false);

  const visitedHandler = () => {
    setVisited(!visited);
  };

  //   console.log(visitedCountriesHandler);
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        name:{name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <p>Code:{cca2}</p>
      <button
        style={{ marginRight: 10 }}
        onClick={() => visitedCountriesHandler(country)}
      >
        Mark as visited
      </button>
      <button onClick={visitedHandler}>{visited ? "visited" : "Going"}</button>
      {/* {visited ? 'i have visited this country': 'i want'} */}
      <hr />

      <CountryData country={country}></CountryData>
    </div>
  );
};

export default Country;
