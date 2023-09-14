const CountryData = ({ country }) => {
  //   console.log(Object.keys(country.languages));

  //   console.log(country.languages[arr[0]]);
  return (
    <div>
      <p>Capital: {country.capital}</p>

      {/*  <span>Language: {country.languages[arr[0]]}</span> */}
    </div>
  );
};

export default CountryData;
