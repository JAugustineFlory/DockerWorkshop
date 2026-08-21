import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Skyrim Gear Viewer</h1>
        <p>By: Jacob Flory and Emilio Roybal</p>
      </header>
      <div className="split-menu">
        <div className="gear-list-container" id="armor-list-container">
          <h2>Armor</h2>
        </div>
        <div className="gear-list-container" id="weapons-list-container">
          <h2>Weapons</h2>
        </div>
      </div>
    </>
  )
}

export default App
