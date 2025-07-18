import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'

function Welcome() {
  const navigate = useNavigate()

  function handleLogin() {
    navigate('/login')
  }

  function handleSignup() {
    navigate('/signup')
  }

  function handleLogout() {
    
    navigate('/login')
  }



  return (
    <div className="welcome-container">
      <h1>Welcome to the Login-Sign Up App using ReactJS</h1>
      <div>Thank you for logging in and signing up to my project</div>
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      
    </div>
  )
}

export default Welcome