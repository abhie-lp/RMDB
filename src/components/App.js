import React from 'react';
import Header from "./elements/Header";
import Home from './Home';
import {GlobalStyle} from "./styles/GlobalStyle";
import {Router} from "@reach/router";
import Movie from "./Movie";
import NotFound from "./NotFound";


const App = () => (
    <>
        <Header />
        <Router>
            <Home path="/"/>
            <Movie path="/:movieId" />
            <NotFound default />
        </Router>
        <GlobalStyle />
    </>
);

export default App;
