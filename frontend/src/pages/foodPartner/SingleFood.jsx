import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { asyncGetSingleFood } from '../../reduxToolKit/Actions/food.action'

const SingleFood = () => {

    const {id}=useParams()
    
    const dispatch=useDispatch()

    useEffect(() => {
      
      dispatch(asyncGetSingleFood(id));
   
    }, [dispatch,id])


    const food =useSelector((state)=>state.food.singleFood)
    console.log("single food data",food);
    

  return (
    <div>{food.title}</div>
  )
}

export default SingleFood