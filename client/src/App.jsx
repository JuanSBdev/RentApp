import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Start from './views/Start/Start'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapperApp">

      <Nav/>
      <Start/>
      <Footer/>
    </div>
  )
}

export default App
