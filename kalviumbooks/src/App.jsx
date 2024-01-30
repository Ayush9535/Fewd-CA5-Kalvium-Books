import './App.css'
import {Routes , Route} from "react-router-dom"
import Home from "./Pages/Home"
import RegistrationForm from "./Pages/RegistrationForm"

function App() {

  return (
    // creating routes for linking all pages 
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<RegistrationForm />} />
    </Routes>
  )
}

export default App
