// This is App.jsx file
// This importing section
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/Home/HomePage';
import Services from './components/Services/Services';

const App = () => {
  return (
    <>
    <NavBar /> 
    {/* This is navbar page call */}
    <HomePage />
    <Services />
    </>
  )
}

export default App
