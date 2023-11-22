import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { Auth } from './config/auth'
import Cart from './Pages/cart'
import Header from './components/Header/Header'
import Shop from './Pages/shop'
import Login from './Pages/login/Login'

function App() {

  return (

    <>
     <Router>
      <Header/>
      <Routes> 
        <Route path='/' element={<Shop/>}/>
        <Route path='/login' element={<Login/>}/>
        
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     </Router>
    </>

  )
}

export default App
