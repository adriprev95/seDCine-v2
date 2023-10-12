import type { MovieList, Movie } from "@/api/types"
import { ref } from "vue"

const apikey = import.meta.env.VITE_API_KEY;
const movieList = ref<MovieList>();
const movie = ref<Movie>();

export async function getMovieTrendList():Promise<MovieList | undefined>{
    try {
        const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?" +
            new URLSearchParams({
                language: "en - US",
                sort_by: "popularity.desc",
                api_key: apikey
            }));
        if (response.status != 200) {
            throw new Error("Error http:" + response.status);
        }
        movieList.value = await response.json();
        return movieList.value;
    }catch(error) {
        console.log(error);
        return undefined;
    }
}

export const getMovieById =async (id: String | String[]):Promise<Movie | undefined> => {
    try {
        const response = await fetch("https://api.themoviedb.org/3/movie/"+id+"?"+
            new URLSearchParams({
                language: "en - US",
                api_key: apikey
            }));
        if (response.status != 200) {
            throw new Error("Error http:" + response.status);
        }
        movie.value = await response.json();
        return movie.value;
    }catch(error) {
        console.log(error);
        return undefined;
    }
}

export async function getMoviePopularList():Promise<MovieList | undefined>{
    try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?" +
            new URLSearchParams({
                language: "en - US",
                sort_by: "popularity.desc",
                api_key: apikey
            }));
        if (response.status != 200) {
            throw new Error("Error http:" + response.status);
        }
        movieList.value = await response.json();
        return movieList.value;
    }catch(error) {
        console.log(error);
        return undefined;
    }
}

export async function getMovieUpcominList():Promise<MovieList | undefined>{
    try {
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?" +
            new URLSearchParams({
                language: "en - US",
                page: "1",
                api_key: apikey
            }));
        if (response.status != 200) {
            throw new Error("Error http:" + response.status);
        }
        movieList.value = await response.json();
        return movieList.value;
    }catch(error) {
        console.log(error);
        return undefined;
    }
}

export async function getMovieCurrentlyList():Promise<MovieList | undefined>{
    try {
       const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?" +
            new URLSearchParams({
                language: "en - US",
                page: "1",
                api_key: apikey
            }));
        if (response.status != 200) {
            throw new Error("Error http:" + response.status);
        }
        movieList.value = await response.json();
        return movieList.value;
    }catch(error) {
        console.log(error);
        return undefined;
    }
}