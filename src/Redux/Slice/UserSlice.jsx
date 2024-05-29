import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({ 
    name: "user",
    initialState: { name: "", isLogged: false },
    reducers: {
        toggleLogged(state) {
            state.isLogged = !state.isLogged;
        },
        setName(state, action) {
            state.name = action.payload;
        },
    },
});

export const userActions = UserSlice.actions;
export default UserSlice;