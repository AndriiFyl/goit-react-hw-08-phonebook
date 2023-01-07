import { useSelector } from "react-redux";
import { authSelectors } from "redux/authorization/authSelectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component, redirectTo }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        isLoggedIn ? component :<Navigate to={redirectTo}/> )
}
   
