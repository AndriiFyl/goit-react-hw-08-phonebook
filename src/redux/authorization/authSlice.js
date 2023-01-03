import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./authOperations";


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
            // localStorage.setItem('token', action.payload.token);
            // відповідь, яка прийшла нам з бекенду записуємо в наш стейт
            // те що прийло з бекенда можемо подивитись в інструментах розробника
            // у вкладці Сеть -> Fetch/XHR -> Предварительный просмотр
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;

        },
        [logIn.fulfilled](state, action) {

            //  localStorage.setItem('token', action.payload.token);

            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;

        },
        [logOut.fulfilled](state, action) {
            // скидаємо стейт до початкових значень
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
    }
})

export const  authReducer  =  authSlice.reducer;
