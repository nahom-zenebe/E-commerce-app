import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
function logout() {
  const navigate=useNavigate()
  return (
    <div>
    <button><Link>Logout</Link></button>
        
    </div>
  )
}

export default logout