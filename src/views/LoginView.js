import { useState } from "react";
import { useDispatch } from "react-redux";
import css from './Common.module.css';
import { logIn } from "redux/authorization/authOperations";

export const LoginView = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
      const dispatch = useDispatch();

    const handleChange = event => {
        const input = event.currentTarget;

   
        switch (input.name) {
          
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
        // диспачимо об'єкт з нашої форми залогінбвання до authOperations - 
        // саме до операції logIn
          dispatch(logIn({ email, password }));
          setEmail('');
          setPassword('');
    };


    return (
        <form className={css.form} onSubmit={handleSubmit}>

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
                Log In
            </button>
        </form>
    )
}