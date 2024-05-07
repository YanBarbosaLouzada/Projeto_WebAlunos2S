import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";
import AnimesSlice from "./Slice/AnimeSlice";

const store = configureStore({
    reducer: { user: UserSlice.reducer, animes: AnimesSlice.reducer },
})

export default store;