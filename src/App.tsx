import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { FavouritesPage } from './pages/FavouritesPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </div>
  )
}

export default App
