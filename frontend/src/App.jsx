import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <h1>AVASUS</h1>
      <Navbar/>
      <div className='container'>
       <Outlet/>
      </div>
    </div>
  )
}

export default App
