import React, {useState, useEffect} from 'react'
import {Routes, Route } from 'react-router-dom'
import './App.css'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import NotFoundPage from './components/NotFoundPage'
import Navbar from './components/Navbar'
import axios from "axios";

export default function App() {
  const [listCountries, setListCountries] =useState(null)
let response

useEffect (()=>{
    const getData =async ()=>{  
    try{
        response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
        setListCountries(listCountries=> listCountries = response)
    } catch(error){
      console.log(error)
    }
  }
  getData()
},[])
  return (  
    <div >
        <Navbar/>
      <Routes>            
          <Route path="/" element={<CountriesList countries={listCountries} />}>          
            <Route path=":id" element={<CountryDetails countries={listCountries}/>}/>
          </Route>       
          <Route path="*" element={<NotFoundPage />}/>               
      </Routes>    
  </div>
  )
}

