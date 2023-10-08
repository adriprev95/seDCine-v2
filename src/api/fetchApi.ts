import type { MovieList, Movie } from "@/api/types"
import { ref } from "vue"

const apikey = "bb6f51bef07465653c3e553d6ab161a8";
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
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2%7C3&release_date.gte=2024-01-01&release_date.lte=2024-01-26&api_key=bb6f51bef07465653c3e553d6ab161a8");
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
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2%7C3&release_date.gte=2023-10-01&release_date.lte=2023-10-10&api_key=bb6f51bef07465653c3e553d6ab161a8");
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