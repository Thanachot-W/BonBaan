import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import UserContext from "../context/UserContext";

const ProtectedRoute = () => {
  const context = useContext(UserContext);
  if(!context.user) {
    return <Navigate to={"/"} replace/>
  }
  return <Outlet context={context}/>;
};

export default ProtectedRoute;