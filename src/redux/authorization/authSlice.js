import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperations";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            // відповідь, яка прийшла нам з бекенду записуємо в наш стейт
            // те що прийло з бекенда можемо подивитись в інстпументах розробника
            // у вкладці Сеть -> Fetch/XHR -> Предварительный просмотр
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;

        }
    }
})

export const  authReducer  =  authSlice.reducer;
