import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {asyncUserLogout,asyncGetUser} from "../reduxToolKit/Actions/user.actoin"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AddAddress from '../components/AddAddress'

const UserProfile = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user = useSelector((state) => state.user.user);
  console.log("user details from profile",user);


  const [check, setcheck] = useState(false)
  

  const logouthandler=()=>{
    dispatch(asyncUserLogout())
    navigate("/")

  }
  console.log("UserProfile mount");

  const onOff=()=>{
    setcheck(!check)
  }

  console.log(check);

  useEffect(() => {
  
    dispatch(asyncGetUser())
   
     
    }, [])


  return (
    <div>

      <h1 className='text-4xl'>{user.fullname}</h1>
      <h2>{user.email}</h2>


     <button onClick={onOff} className='bg-neutral-800 rounded p-3 text-white m-2' >Add Address</button>

    {check && 
    
    <AddAddress/>
    
    }

    <button className='bg-neutral-800 rounded p-3 text-white m-2' onClick={logouthandler}>logout</button>

    </div>
  )
}

export default UserProfile