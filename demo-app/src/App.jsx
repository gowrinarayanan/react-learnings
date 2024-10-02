import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/add'
import Nav from './components/Nav'
import { Box, Button, IconButton, MenuItem, Toolbar, Typography } from '@mui/material'
import { AppBar} from '@mui/material'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h2>Welcome to React Learning</h2>
    <Home/>
    <br />
    <Add/>
    

      {}
       */}
       <Nav />
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/add' element={<Add/>}></Route>


       </Routes>
       
    {/* <Home />
    <Add /> */}
    
    
    </>
  )
}

export default App