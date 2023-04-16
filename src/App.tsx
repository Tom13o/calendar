import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './auth'
import SignUp from './pages/SignUp'
import LandingContainer from './pages/LandingContainer'
import LandingPage from './pages/LandingPage'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PrivateRoute from './pages/PrivateRoute'
import HomeLanding from './pages/HomeLanding'
import HomePage from './pages/HomePage'
import LoggedOut from './pages/LoggedOut'

export default function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<LandingContainer />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/home" element={<PrivateRoute><HomeLanding /></PrivateRoute>}>
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/loggedout" element={<LoggedOut />} />
    </Routes>
    </AuthProvider>
  )
}