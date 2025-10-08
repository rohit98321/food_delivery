import React, { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './Nav/Nav'
import { useDispatch } from 'react-redux'
import {clearUser} from "./reduxToolKit/Slices/user.slice"
import { asyncGetUser } from "./reduxToolKit/Actions/user.actoin";
import { asyncGetfoodPartner } from "./reduxToolKit/Actions/partner.action";

const App = () => {
const dispatch=useDispatch()






 console.log("app mount");
 useEffect(() => {
  dispatch(asyncGetUser());
  dispatch(asyncGetfoodPartner());
}, []);
  return (
    <div>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App