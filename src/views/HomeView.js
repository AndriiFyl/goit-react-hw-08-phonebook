import css from './Common.module.css'
import { useSelector } from "react-redux";
import { authSelectors } from "redux/authorization/authSelectors";

export const HomeView = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <div className={css.page}>
            {isLoggedIn?  <p
                className={css.home__grettings}>
                Use Phonebook application !
            </p> :
                <p className={css.home__grettings}> Glad to see you in Phonebook application! <br />
                    <span className={css.suggestion__register}>Please login or register...</span></p>}
           
        </div>
    )
}