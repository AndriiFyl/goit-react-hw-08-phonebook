import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authorization/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={css.Container_Navigation}>
      <NavLink className={css.menu__nav__item} to="/">
        <div>Home</div>
      </NavLink>

      {!isLoggedIn ? (
        <div className={css.menu__container}>
          <NavLink className={css.menu__nav__item} to="/register">
            <div>Registartion</div>
          </NavLink>
          <NavLink className={css.menu__nav__item} to="/login">
            <div>Login</div>
          </NavLink>
        </div>
      ) : (
        <>
          <NavLink className={css.menu__nav__item} to="/contacts">
            <div>Contacts</div>
          </NavLink>
          <UserMenu />
        </>
      )}
    </div>
  );
};
