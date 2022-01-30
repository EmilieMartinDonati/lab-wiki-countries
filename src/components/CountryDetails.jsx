import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
// import { Link } from "react-router-dom";

const CountryDetails = ({ countries }) => {
  const params = useParams();

  const myCountry = countries.find(
    (country) => country.alpha3Code === params.id
  );

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${myCountry.alpha2Code.toLowerCase()}.png`}
        alt="country flag"
        style={{width: "300px"}}
      />
      <h1>{myCountry.name['common']}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{myCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {myCountry.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {myCountry.borders.map((border) => {
                  const foundCountry = countries.find((country) => country.alpha3Code === border);
                  return <li style={{
                    listStyleType: "none"
                  }}><NavLink to={`/CountriesList/${foundCountry.alpha3Code}`}>{foundCountry.name[`common`]}</NavLink></li>;
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
