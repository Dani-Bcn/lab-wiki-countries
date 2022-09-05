/* eslint-disable jsx-a11y/alt-text */


import { NavLink, useParams } from 'react-router-dom'
export default function CountryDetails({countries}) {
const {id} =useParams()
let country
console.log(id)
  console.log(countries)
 country =countries.data.filter(coco => coco.alpha2Code===id)
  console.log(country[0].borders[0])
  const selectCountry =((e)=>{     
          console.log(country)
          country =countries.data.filter(ele=> ele.alpha3Code===e)    
  })  
  return (
  
        <div className='selectCard' width="600">
          { console.log(country)}
          <h1>{country[0].name.common}</h1>   
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country[0].alpha2Code.toLowerCase()}.png`}/>         
          <h3>Capital : {country[0].capital[0]}</h3>   
          <hr width="200"/>
          <h3>Area : {country[0].area}</h3>
          <hr width="200"/>
        {country[0].borders.map((e)=>{
          return (
            <div key={e}>           
              <h3 onClick={()=>{selectCountry(e)}}>{e}</h3>             
            </div>          
             )
          }) }     
      </div>         
 
  ) 
}
