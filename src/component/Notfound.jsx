import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate=useNavigate()
  return (
    <div>
        <h4 className='errorMessage'>Error 404: Not Found</h4>
        <button className='notfoundPage' onClick={()=>navigate("/shop")}>Go Home</button>
    </div>
  )
}

export default Notfound