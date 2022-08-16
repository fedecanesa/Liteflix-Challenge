import React from 'react';
import PropTypes from 'prop-types';
import { Movie } from '../../components';
import { useSelector } from 'react-redux';

const MovieList = () => {
    const { movies, myMovies, filterStatus } = useSelector((state) => state.movies);

    return (
        (movies && movies.length > 0) &&
        <>
            {
                filterStatus === 'populares' &&
                movies.map(movie => {
                    return <Movie
                        key={movie.id}
                        title={movie.title}
                        vote_average={movie.vote_average}
                        release_date={movie.release_date}
                        poster_path={movie.poster_path}
                    />
                })
            }
            {
                (filterStatus === 'mis peliculas' && myMovies.length > 0) &&
                // eslint-disable-next-line array-callback-return
                myMovies.map((movie, i) => {
                    if (i < 4) {
                        return <Movie
                            key={i}
                            title={movie.title}
                            image={movie.image}

                        />
                    }
                })
            }
        </>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array,
    myMovies: PropTypes.array,
    filterStatus: PropTypes.string
}

export default MovieList;