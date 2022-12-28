import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import css from './Common.module.css';

export const LoginView = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    //   const dispatch = useDispatch();

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
        //   dispatch(addContact({ name, email, password }));
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
                Register
            </button>
        </form>
    )
}