  import { Navigate } from "react-router-dom"
  import {useSelector} from "react-redux"

  const UserAuth = (props) => {

      const user=useSelector((state)=>state.user.user)
      console.log("auth user --> ",user);


    return !user ? <Navigate to={"/user/login"}/> : props.children  
  }

  export default UserAuth