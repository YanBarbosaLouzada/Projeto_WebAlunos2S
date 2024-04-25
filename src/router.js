import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/Homepage/HomePage";
import AnimePage from "./pages/AnimePage/AnimePage";
import Layout from "./pages/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Favorito from "./components/Favoritos/Favorito";
import NotesPage from "./pages/NotesPage/NotesPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/anime",
                element: <AnimePage></AnimePage>
            },
            {
                path: "/notes",
                element:<NotesPage></NotesPage>
            },
            {
                path: "/favorito",
                element: <Favorito></Favorito>,
                loader: async () => {
                    return fetch(`https://api.jikan.moe/v4/anime?q=Kami to Yobareshi Arceus`)
                }
            },
            

        ], errorElement: <ErrorPage></ErrorPage>
    }
])