import React from 'react';
import { Link, Outlet } from "react-router-dom";

const CountriesList = ({ countries }) => {
    return (
        <>
    
            <div className="col-5">
                <ul>
                    {countries.map((country) => {
                        return <div key={country.alpha3Code}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{country.name['common']}</h5>
                                    <p className="card-text"></p>
                                    <Link to={"/CountriesList/" + country.alpha3Code}>{country.name['common']}</Link>
                                </div>
                            </div>
                        </div>
                    }
                    )}
                </ul>
                </div>
                <Outlet />
            </>
            )
}

            export default CountriesList;