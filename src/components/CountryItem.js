import React from "react";

function CountryItem(props) {
  // console.log(props.data);
  const CountryDetail = props.data.map((country) => {
    return (
      <li key={Math.random()} className="rounded-sm my-10 shadow-md">
        {/* onClick={} using on click to go countrydetails page */}
        <figure>
          <img src={country.coatOfArms.png} alt={country.name.common} />
          <figcaption>
            <h1 className="text-xl font-bold px-3">{country.name.common}</h1>
            <div className="p-2">
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </figcaption>
        </figure>
      </li>
    );
  });
  return <React.Fragment>{CountryDetail}</React.Fragment>;
}

export default CountryItem;
