import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {asyncUserLogout,asyncGetUser} from "../reduxToolKit/Actions/user.actoin"
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const logouthandler=()=>{
    dispatch(asyncUserLogout())
    navigate("/")

  }
  console.log("UserProfile mount");

  useEffect(() => {
  
    dispatch(asyncGetUser())
   
     
    }, [])


  return (
    <div>


    <button className='bg-neutral-800 rounded p-3 text-white m-2' onClick={logouthandler}>logout</button>

    </div>
  )
}

export default UserProfile