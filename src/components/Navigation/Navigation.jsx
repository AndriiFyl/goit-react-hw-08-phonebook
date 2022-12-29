import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  return (
    <div className={css.Container_Navigation}>
      <div className={css.menu__container}>
        <NavLink className={css.menu__nav__item} to="/">
          <div>Home</div>
        </NavLink>
        <NavLink className={css.menu__nav__item} to="/register">
          <div>Registartion</div>
        </NavLink>
        <NavLink className={css.menu__nav__item} to="/login">
          <div>Login</div>
        </NavLink>
        <NavLink className={css.menu__nav__item} to="/contacts">
          <div>Contacts</div>
        </NavLink>
      </div>
      <UserMenu />
    </div>
  );
};
