import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

// за допомогою бібліотеки axios можемо автоматично прокидувати token на кожну нашу операцію: реєстрації користувача,
// залогінювання, розлогінювання
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


// операція реєстрації корстувача
// в credentials буде записуватись весь об'єкт з інфою (name, password, email), 
// який ми будемо передавати сюди(діспатчити)з форми реєстрації
 
export const register = createAsyncThunk('auth/register',
    async (credentials, thunkAPI) => {
    try {
        // '/users/signup' - беремо з документації бекенда, і відповідно ця частина адреси
        // додасться до дефолтного baseURL і об'єкт з інфою про нового користувача
        // відправиться на сервер (бекенд)
        const { data } = await axios.post('/users/signup', credentials);
        // тепер, при реєстрації користувача йому надається його особистий token, який автоматом буде використовуватись пыд час 
        // інших операцій: додавання контакту, видалення, редагування
        token.set(data.token);
        // повертаємо результат відповіді з бекенда
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


// операція для входу (log in)===========================================
export const logIn = createAsyncThunk('auth/login',
        async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// операція для розлогінювання (log out)==================================

export const logOut = createAsyncThunk('auth/logout',
    async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        token.unset();
    }
    catch (error) {
         return thunkAPI.rejectWithValue(error.message);
    }
});

// операція оновлення користувача==============================================
// Логіка: завантажуємо додаток і відразу запускається fetchCurrentUser (в App useEffect)
// і якщо token був в localStorage (не null) і відповідно Persist його додав до state, то ми сетимо
// token  і відбувається запит
export const fetchCurrentUser = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        // thunkAPI.getState() - повнісю увесть стейт з Redux
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        
        // Якщо ми не маємо token в localStorage - то просто виходимо звідси
        // наприклад, коли користувач розлогінився - то ні Redux-state ні в localStorage
        // не буде token (тобто він буде null), і ніякий запит ми зробити не зможемо - тому виходимо
        if (persistedToken === null) {
            // відміняємо запит , якщо token === null
            return thunkAPI.rejectWithValue();
          
        }
        // якщо ж token не null, то потрібно засетити token (для бекенду передати header)
        token.set(persistedToken);
        try {
            // отримуємо відповідь з бекенду і повертаємо об'єкт інфи про юзера
            const {data} = await axios.get('/users/current');
            return data;

        } catch (error) {
             return thunkAPI.rejectWithValue(error.message);
        }
});