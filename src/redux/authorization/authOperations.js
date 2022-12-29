import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'


// операція реєстрації корстувача
// в credentials буде записуватись весь об'єкт з інфою (name, password, email), 
// який ми будемо передавати сюди(діспатчити)з форми реєстрації
 
export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        // '/users/signup' - беремо з документації бекенда, і відповідно ця частина адреси
        // додасться до дефолтного baseURL і об'єкт з інфою про нового користувача
        // відправиться на сервер (бекенд)
        const { data } = await axios.post('/users/signup', credentials);
        // повертаємо результат відповіді з бекенда
        return data;
    } catch (error) {
        // error
    }
});


