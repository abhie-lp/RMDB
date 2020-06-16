import React from "react";

import Grid from "./elements/Grid";
import HeroImage from "./elements/HeroImage";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import MovieThumb from "./elements/MovieThumb";
import SearchBar from "./elements/SearchBar";
import Spinner from "./elements/Spinner";

import {useHomeFetch} from "./hooks/useHomeFetch";

const Home = () => {
    const [{state, loading, error}, fetchMovies] = useHomeFetch();
    console.log(state);

    return (
        <>
            <HeroImage />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn />
        </>
    )
}

export default Home;
