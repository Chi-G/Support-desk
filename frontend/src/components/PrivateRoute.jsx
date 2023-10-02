import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
import Spinner from "./Spinner"

// this function checks if user is loggedIn
const  PrivateRoute = () => {
  const {loggedIn, checkingStatus} = useAuthStatus()

  if(checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
