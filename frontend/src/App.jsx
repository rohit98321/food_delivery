import React, { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './Nav/Nav'
import { useDispatch } from 'react-redux'
import { asyncGetUser } from './reduxToolKit/Actions/user.actoin'
import {clearUser} from "./reduxToolKit/Slices/user.slice"

const App = () => {
const dispatch=useDispatch()






 console.log("app mount");

  return (
    <div>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App