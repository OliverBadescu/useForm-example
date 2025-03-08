import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import Login from './components/Login/Login';

function App() {


  return (
    <>

      <Router>
        <Routes>
        <Route path='/' element ={<RegistrationForm/>}/>
        <Route path='/login' element ={<Login/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
