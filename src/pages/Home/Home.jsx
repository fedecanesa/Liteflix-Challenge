import React, { useEffect, useState } from 'react';
import {
    getOutstandingMovies,
    popularMovies,
} from '../../service/movies.service';
import {
    Button,
    CustomCursor,
    Dropdown,
    Layout,
    Loader,
    MainTitle,
    Menu,
    Modal,
    MovieList,
    Navbar,
} from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
    fail,
    pending,
    success,
    hero
} from '../../features/movies/moviesSlice';
import useScreenSize from '../../hooks/useScreenSize';
import {
    play4,
    plus
} from '../../utils/image';
import PropTypes from 'prop-types';
import './home.scss';

const Home = () => {
    const dispatch = useDispatch();
    const { isLoading, heroMovie } = useSelector((state) => state?.movies);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false)
    const { width } = useScreenSize();
    const handlerMenu = () => setIsOpenMenu(!isOpenMenu);

    const handlerModal = () => {
        setIsOpenMenu(false)
        setIsOpenModal(!isOpenModal)
    };
    const base_url = `http://image.tmdb.org/t/p/original/${heroMovie?.poster_path}`;
    /**
     * I'm going to call the popularMovies() function, and if it returns a status of 200, I'm going to
     * take the first 4 results and return them.
     * @returns The return of the dispatch function.
     */
    const getPopularMovies = async () => {
        try {
            const { data: { results }, status } = await popularMovies();
            if (status === 200) {
                let moviesAux = results.slice(0, 4);
                return dispatch(success(moviesAux))
            } else {
                return dispatch(fail('Error al caragar las películas.'));
            }
        } catch (error) {
            console.error(error)
            return dispatch(fail('Error al caragar las películas.'));
        }
    }

    /**
    * I'm going to call the getHeroMovie() function, and if it returns a status of 200, I'm going to
    * take a random movie and return them.
    * @returns The return of the dispatch function.
    */

    const getHeroMovie = async () => {
        try {
            const { data: { results }, status } = await getOutstandingMovies();
            if (status === 200) {
                const randomMovie = results[Math.floor(Math.random() * results?.length)];
                return dispatch(hero(randomMovie))
            } else {
                return dispatch(fail('Error al caragar las películas.'));
            }
        } catch (error) {
            console.error(error)
            return dispatch(fail('Error al caragar las películas.'));
        }
    }

    useEffect(() => {
        dispatch(pending())
        setIsOpenMenu(false)
        setIsOpenModal(false)
        setTimeout(() => {
            getHeroMovie();
            getPopularMovies();
        }, 3200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (

        isLoading
            ? <Layout>
                <Loader />
            </Layout>
            :
            <>
                <CustomCursor />
                <div
                    className='home'
                    style={
                        { backgroundImage: ` url(${base_url})` }
                    }
                >
                    {
                        isOpenMenu && <Menu handlerMenu={handlerMenu} handlerModal={handlerModal} />
                    }
                    {
                        isOpenModal && <Modal handlerModal={handlerModal} handlerMenu={handlerMenu} isOpenModal={isOpenModal} />
                    }
                    <Navbar
                        handlerMenu={handlerMenu}
                        handlerModal={handlerModal}
                    />
                    <main className='main__container'>
                        <section className='section__container'>
                            <div className='section__container--h2'>
                                <h2>original de <b>liteflix</b></h2>
                            </div>
                            <MainTitle>{heroMovie.title}</MainTitle>
                            <div className='button__container'>

                                <Button
                                    content={"Reproducir"}
                                    disabled={false}
                                    name={"Reproducir"}
                                    type={"button"}
                                    icon={play4}
                                    color={"#242424"}
                                    textColor={"#FFFFFF"}
                                    border={"none"}
                                />

                                <span style={{ marginRight: "24px" }}></span>
                                <Button
                                    content={"Mi lista"}
                                    disabled={false}
                                    name={"Mi lista"}
                                    type={"button"}
                                    icon={plus}
                                    color={"rgba(36, 36, 36, 0.5)"}
                                    textColor={"#FFFFFF"}
                                    border={"1px solid rgba(255, 255, 255, 0.5)"}
                                />
                            </div>
                        </section>
                        {
                            width >= 1000 &&
                            <aside className='movieList'>
                                <Dropdown />
                                <MovieList />
                            </aside>

                        }

                    </main>
                </div >
                {
                    width < 1000 &&
                    <div className='movieList__phone'>
                        <Dropdown />
                        <MovieList />
                    </div>
                }
            </>
    )
}

Home.propTypes = {
    dispatch: PropTypes.func,
    isLoading: PropTypes.bool,
    heroMovie: PropTypes.object,
    getPopularMovies: PropTypes.func,
    getHeroMovie: PropTypes.func,
    isOpenMenu: PropTypes.bool,
    setIsOpenMenu: PropTypes.func,
    isOpenModal: PropTypes.bool,
    setIsOpenModal: PropTypes.func,
    handlerMenu: PropTypes.func,
    handlerModal: PropTypes.func

}

export default Home;