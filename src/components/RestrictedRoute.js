import { useSelector } from "react-redux";
import { authSelectors } from "redux/authorization/authSelectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component, redirectTo }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        isLoggedIn ?  <Navigate to={redirectTo}/>  : component)
}
   