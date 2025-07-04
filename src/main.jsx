import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import SignIN from './pages/SignIn'
import SignUP from './pages/SignUp'
import CustomerLanding from './pages/customerPages/CustomerLanding.jsx'
import AdminLanding from './pages/AdminPages/AdminLanding.jsx'
import WorkerLanding from './pages/WorkerPages/WorkerLanding.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signIn" element={<SignIN />} />
      <Route path='/signUp' element={<SignUP />} />
      <Route path='/custLand' element={<CustomerLanding />} />
      <Route path='/adminLand' element={<AdminLanding />} />
      <Route path='/workerLand' element={<WorkerLanding />} />
    </Routes>
  </Router>
)
