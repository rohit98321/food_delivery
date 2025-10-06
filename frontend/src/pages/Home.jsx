import React, { useEffect } from 'react'
import { asyncGetUser } from '../reduxToolKit/Actions/user.actoin';
import { asyncGetfoodPartner } from '../reduxToolKit/Actions/partner.action';
import { useDispatch } from 'react-redux';
import ReelsPage from './ReelsPage';

const Home = () => {

  console.log("Home mount");

 
  
  const dispatch=useDispatch()
  useEffect(() => {
    
    dispatch(asyncGetUser())
    dispatch(asyncGetfoodPartner())
  
  }, [])

  return (
    <div className='bg-[#1A3636] h-screen w-full'>

      <ReelsPage/>
    </div>
  )
}

export default Home