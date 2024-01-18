import './App.css';
import React from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom"
import AllCountries from "./AllCountries"
import CountryDetails from "./CountryDetails" 
import Header from './pages/Header';


const App = () => {
  return (
    <>    
      <Header/>
      <Main>
        <Routes>
            <Route path="/"  element={<AllCountries />} />
            <Route path="/country/:countryName" element={CountryDetails} />
        </Routes>
      </Main>
    </>

  );
};

export default App; 