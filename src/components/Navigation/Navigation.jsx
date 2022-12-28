import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={css.Container_Navigation}>
      <div className={css.menu__container}>
        <NavLink className={css.menu__nav} to="/">
          <div>Registartion</div>
        </NavLink>
        <NavLink className={css.menu__nav} to="/movies">
          <div>Login</div>
        </NavLink>
        <NavLink className={css.menu__nav} to="/movies">
          <div>Contacts</div>
        </NavLink>
      </div>
    </div>
  );
};
