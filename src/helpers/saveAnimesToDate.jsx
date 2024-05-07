import { animeActions } from "../Redux/Slice/AnimeSlice";

export const saveAnimesToDate = (animesFavoritList) => {
    return async (dispatch) => {
        localStorage.setItems("animesList", animesFavoritList);
        dispatch(animeActions.setAnimesList(animesFavoritList))
    }
}