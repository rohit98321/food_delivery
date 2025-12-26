import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { asyncGetSingleFood } from '../../reduxToolKit/Actions/food.action'

const SingleFood = () => {

    const id=useParams()
    
    const dispatch=useDispatch()

    useEffect(() => {
      
      dispatch(asyncGetSingleFood(id))
   
    }, [])
    

  return (
    <div>SingleFood</div>
  )
}

export default SingleFood