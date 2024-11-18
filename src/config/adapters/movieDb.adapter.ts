import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: '414e23182db456448adfebf0ec62cfa3',
        api_key: THE_MOVIE_DB_KEY,
        language: 'es'
    }
})