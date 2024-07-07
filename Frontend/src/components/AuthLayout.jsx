import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children, authentication = true}) {
  const navigate = useNavigate()
  const [loader , setLoader] = useState(true)
  const userStatus = useSelector(state => state.auth.status) 

  useEffect(()=>{
    setLoader(true)


    if (authentication && userStatus !== authentication) {
      navigate("/login")
    }  else if (!authentication && userStatus !== authentication){
      navigate("/")
    }

    setLoader(false)
  },[authentication, userStatus, navigate])

  return loader ? <h1 className='text-3xl text-orange-400'>Loading...</h1> : <>{children}</>;
  
}

export default Protected
