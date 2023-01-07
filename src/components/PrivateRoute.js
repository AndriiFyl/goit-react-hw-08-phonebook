import { useSelector } from "react-redux";
import { authSelectors } from "redux/authorization/authSelectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component, redirectTo }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    // const isRefreshing = useSelector(authSelectors.isRefreshing);
    // const shouldRedirect = !isLoggedIn && !isRefreshing;
    return (
        // shouldRedirect ? <Navigate to={redirectTo}/>  : component )
        isLoggedIn ? component :  <Navigate to={redirectTo}/>
    )
}
   
