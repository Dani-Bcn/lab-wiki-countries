import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Data from './countries.json'

export default function App() {
  console.log(Data)
  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}

