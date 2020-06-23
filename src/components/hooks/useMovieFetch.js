import React from "react";
import {API_URL, API_KEY} from "../../config";

export const useMovieFetch = movieId => {
    const [state, setState] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    const fetchData = React.useCallback(async () => {
        setError(false);
        setLoading(true)
        try {
            const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
            const result = await(await fetch(endpoint)).json();

            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            const creditsResult = await(await fetch(creditsEndpoint)).json();

            const directors = creditsResult.crew.filter(
                memeber => memeber.job === "Director"
            );

            setState({
                ...result,
                actors: creditsResult.cast,
                directors
            })

        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [movieId])

    React.useEffect(() => {
        if (localStorage[movieId]) {
            setState(JSON.parse(localStorage[movieId]));
            setLoading(false);
        } else {
            fetchData()
        }
    }, [fetchData]);

    React.useEffect(() => {
        localStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state])

    return [state, loading, error];
}
