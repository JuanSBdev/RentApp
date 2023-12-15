import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Start from './views/Start/Start'
import Footer from './components/Footer/Footer'
import {Routes, Route} from "react-router-dom"
import Detail from './views/Detail/Detail'
import Reserves from './views/Reserves/ReservesView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapperApp">

      <Nav/>
    <Routes>
      <Route path='/' Component={Start} />
      <Route path='/details/:id' Component={Detail} />
      <Route path='/reserves' Component={Reserves} />

    </Routes>
      <Footer/>
    </div>
  )
}

export default App
