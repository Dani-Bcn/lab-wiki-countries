/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */

import {Outlet, NavLink,useParams} from 'react-router-dom'
import React,{useState} from 'react'
export default function CountriesList({countries}) {
  const [dataCountries, setDataCountries] = useState(countries)     
  return (
    <div className='container'>
         <div className='containerCard'>
        {countries && countries.data.map((e)=>{   
          return (
            <NavLink  key={e.alpha3Code} to={e.alpha2Code}>
              <div className='card'>                     
                <h1 key={e.alpha2Code}>{e.name.common}</h1>  
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`}/>                           
              </div>   
            </NavLink>             
          ) 
        })}
 </div>
      <Outlet></Outlet> 
   
    </div>
 
  )
}
