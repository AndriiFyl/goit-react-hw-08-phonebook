import { useState } from "react";
import { useDispatch } from "react-redux";
import css from './Common.module.css';
import { register } from "redux/authorization/authOperations";


export const RegisterView = () => {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();

    const handleChange = event => {
        const input = event.currentTarget;

        switch (input.name) {
            case 'name':
                setName(input.value);
                break;

            case 'email':
                setEmail(input.value);
                break;
        
            case 'password':
                setPassword(input.value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        // відправляємо дані про користувача до операції register,
        // де { name, email, password } запишуться до credentials і відправляться
        // на сервер
        dispatch(register({ name, email, password }));
        // Після відправки інфи видаляємо дані з форми
        setName('');
        setEmail('');
        setPassword('');
    };


    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label__wrapper}>
                Name{' '}
                <input
                    type="text"
                    value={name}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                />
            </label>
            <label className={css.label__wrapper}>
                Email
                <input
                    type="email"
                    value={email}
                    name="email"
                    required
                    onChange={handleChange}
                />
            </label>
            <label className={css.label__wrapper}>
                Password
                <input
                    type="text"
                    value={password}
                    name="password"
                    required
                    onChange={handleChange}
                />
            </label>
            <button className={css.btn} type="submit">
                Register
            </button>
        </form>
    )
}