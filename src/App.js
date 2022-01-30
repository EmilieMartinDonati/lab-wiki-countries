// import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from "./countries.json";

function App() {
  return <div className="App">
    <Navbar />
    <div className="container">
    <div className="row">
    <Routes>
				<Route path="/CountriesList" element={<CountriesList countries={countries}/>}>
					<Route path=":id" element={<CountryDetails countries={countries} />} />
				</Route>
			</Routes>
      </div>
      </div>
  </div>
}

export default App;
