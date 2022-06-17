import React from "react";

function CountryItem(props) {
  const CountryDetail = props.data.map((country) => {
    return (
      <li key={country.area} className="rounded-sm my-5 shadow-md">
        {/* onClick={} using on click to go countrydetails page */}
        <figure>
          <img src={country.coatOfArms.png} alt={country.name.common} />
          <figcaption>
            <h1>{country.name.common}</h1>
            <div className="p-2">
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital[0]}</p>
            </div>
          </figcaption>
        </figure>
      </li>
    );
  });
  return <React.Fragment>{CountryDetail}</React.Fragment>;
}

export default CountryItem;
