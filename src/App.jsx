import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './Components/Welcome'
import Login from './Components/Login'
import Signup from './Components/Signup'
import "./App.css"



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/login' element={<Login />}></Route>
         <Route path='/signup' element={<Signup />}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App