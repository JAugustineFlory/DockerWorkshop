import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import MainDisplay from './MainDisplay'
import GearViewer from './GearViewer'

function App() {

  return (
    <BrowserRouter>
    <div className='root-page'>
      <Navbar />
      <div className='main-display'>
        <Routes>
          <Route path="/" element={<MainDisplay />}></Route>
          <Route path="/:type/:id" element={<GearViewer />}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
