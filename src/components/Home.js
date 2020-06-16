import React from "react";

import Grid from "./elements/Grid";
import HeroImage from "./elements/HeroImage";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import MovieThumb from "./elements/MovieThumb";
import SearchBar from "./elements/SearchBar";
import Spinner from "./elements/Spinner";

import {useHomeFetch} from "./hooks/useHomeFetch";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";

const Home = () => {
    const [{state, loading, error}, fetchMovies] = useHomeFetch();
    console.log(state);

    if (error) return <div>Something went wrong..</div>;
    if (!state.movies[0]) return <Spinner />;
    console.log("State here", state);
    return (
        <>
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                title={state.heroImage.original_title}
                text={state.heroImage.overview}
            />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn />
        </>
    )
}

export default Home;
