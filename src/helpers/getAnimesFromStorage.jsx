import { animeActions } from "../Redux/Slice/AnimeSlice";

export const getAnimesFromStorage = () => {
    return async (dispatch) => {
        const animes = localStorage.getItem("animeslist");
        dispatch(animeActions.setAnimesList(animes))
    }
}