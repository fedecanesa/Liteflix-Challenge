import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { play, play3, star } from '../../utils/image';
import { useSelector } from 'react-redux';
import './movie.scss';

const Movie = ({
    title,
    poster_path,
    vote_average,
    release_date,
    image
}) => {
    const base_url = "http://image.tmdb.org/t/p";
    const [over, setOver] = useState(false);
    const { filterStatus } = useSelector((state) => state.movies);

    return (
        <div
            className={over ? 'movie over' : 'movie'}
            style={filterStatus === "populares"
                ? { backgroundImage: ` url(${base_url}/original/${poster_path})` }
                : { backgroundImage: image }
            }
            onMouseEnter={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
        >
            {
                filterStatus === "mis peliculas"
                    ? <div className='movie__container--myMovies' style={{ cursor: 'pointer' }}>
                        {
                            over
                                ?
                                <div className='movie__container--over p'>
                                    <div className='container__display'>
                                        <div className='container__display--img'>
                                            <img src={play3} alt="Play the movie" />
                                        </div>
                                        <h4>{title}</h4>
                                    </div>
                                    <div className='container__data'>
                                        <div className='container__data--ranking'>
                                            <img src={star} alt="Vote average" />
                                            <span>{vote_average}</span>
                                        </div>
                                        <span className='container__data--year'>{release_date?.slice(0, 4)}</span>
                                    </div>
                                </div>
                                : <div className='movie__container p'>
                                    <div className='movie__play'>
                                        <img src={play} alt="Play the movie" />
                                    </div>
                                    <h4>{title}</h4>
                                </div>
                        }
                        <img className='movie__container' src={image} alt={title} />
                    </div>
                    :
                    over
                        ?
                        <div className='movie__container--over'>
                            <div className='container__display'>
                                <div className='container__display--img'>
                                    <img src={play3} alt="Play the movie" />
                                </div>
                                <h4>{title}</h4>
                            </div>
                            <div className='container__data'>
                                <div className='container__data--ranking'>
                                    <img src={star} alt="Vote average" />
                                    <span>{vote_average}</span>
                                </div>
                                <span className='container__data--year'>{release_date?.slice(0, 4)}</span>
                            </div>
                        </div>
                        :
                        <div className='movie__container'>
                            <div className='movie__play'>
                                <img src={play} alt="Play the movie" />
                            </div>
                            <h4>{title}</h4>
                        </div>
            }

        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string
}

export default Movie;