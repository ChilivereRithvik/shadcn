import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './Dashboard'
import Gpt from './Gpt'
import Layout from './components/Layout'
import Login from './Login'
import Signup from './Sigup'
// import Settings from './Settings'
import Upgrade from './upgrade'

function App() {


  return (
<>
<Router>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/gpt" element={<Gpt />} />
    <Route path="/layout" element={<Layout />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    {/* <Route path='/settings' element={<Settings />} /> */}
    <Route path='/upgrade' element={<Upgrade />} />
  </Routes>
</Router>
</>
  
  )
}

export default App
