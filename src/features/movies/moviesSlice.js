import { createSlice } from '@reduxjs/toolkit';

const getInitialMyMovies = () => {
    const localMyMovies = window.localStorage.getItem('myMovies');

    if (localMyMovies) {
        return JSON.parse(localMyMovies).reverse();
    }
    window.localStorage.setItem('myMovies', []);
    return [];
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        isLoading: false,
        error: '',
        movies: [],
        heroMovie: {},
        myMovies: getInitialMyMovies(),
        filterStatus: 'populares'
    },
    reducers: {
        fail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            state.movies = [];
            state.heroMovie = {}
        },
        pending: (state) => {
            state.isLoading = true;
        },
        success: (state, { payload }) => {
            state.isLoading = false;
            state.error = '';
            state.movies = payload;
        },
        hero: (state, { payload }) => {
            state.isLoading = false;
            state.error = '';
            state.heroMovie = payload;
        },
        updateFilter: (state, { payload }) => {
            state.filterStatus = payload;
        },
        addMovie: (state, { payload }) => {
            const movie = {
                ...payload
            }
            state.myMovies.unshift(movie)
            const myMoviesList = window.localStorage.getItem('myMovies');
            if (myMoviesList) {
                const myMoviesListArr = JSON.parse(myMoviesList);
                myMoviesListArr.push({
                    ...payload
                });
                window.localStorage.setItem('myMovies', JSON.stringify(myMoviesListArr));
            } else {
                window.localStorage.setItem(
                    'myMovies',
                    JSON.stringify([
                        {
                            ...payload,
                        },
                    ])
                );
            }
            state.isLoading = false;
        }
    }
})
export const {
    fail,
    pending,
    success,
    updateFilter,
    addMovie,
    hero
} = moviesSlice.actions;
export default moviesSlice.reducer;