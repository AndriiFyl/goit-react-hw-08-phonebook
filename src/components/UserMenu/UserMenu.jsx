import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/authorization/authSelectors';
import css from './UserMenu.module.css';
import { logOut } from 'redux/authorization/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  return (
    <div className={css.logout__wrapper}>
      <p className={css.email}>{email}</p>
      <button className={css.btn} onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};
