import React from "react";
import {API_URL, API_KEY} from "../../config";

export const useHomeFetch = () => {
    const [state, setState] = React.useState({movies: []});
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    const fetchMovies = async  endpoint => {
        setError(false);
        setLoading(true);
        try {
            const result = await(await fetch(endpoint)).json();
            setState(prev => ({
                ...prev,
                movies: [...result.results],
                heroImage: prev.heroImage || result.results[0],
                currentPage: result.page,
                totalPages: result.total_pages,
            }))
            console.log("STAAAAAATE", state);
        } catch {
            setError(true);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
    }, []);

    return [{state, loading, error}, fetchMovies];
}