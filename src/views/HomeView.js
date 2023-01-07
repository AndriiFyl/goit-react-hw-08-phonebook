import css from './Common.module.css'
import { useSelector } from "react-redux";
import { authSelectors } from "redux/authorization/authSelectors";
import { NavLink } from 'react-router-dom';

export const HomeView = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <div className={css.page}>
            {isLoggedIn?  <p
                className={css.home__grettings}>
                Use Phonebook application !
            </p> :
                <div className={css.home__grettings}> 
                Glad to see you in Phonebook application! <br />
                    <div className={css.suggestion__register}>
                        Please, {''}  
                        <NavLink
                            className={css.reference__route} to="/login">login</NavLink> {''} 
                        or {''} 
                        <NavLink
                            className={css.reference__route} to="/register">register</NavLink></div>
                </div>}
                    
           
        </div>
    )
}