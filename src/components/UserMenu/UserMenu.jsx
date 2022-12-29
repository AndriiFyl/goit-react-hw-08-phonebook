import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.logout__wrapper}>
      <p>mail@.com</p>
      <button className={css.btn}>Logout</button>
    </div>
  );
};
