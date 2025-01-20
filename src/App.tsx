import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './Dashboard'
import Gpt from './Gpt'
import Layout from './Layout'

function App() {


  return (
<>
<Router>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/gpt" element={<Gpt />} />
    <Route path="/layout" element={<Layout />} />
  </Routes>
</Router>
</>
  
  )
}

export default App
