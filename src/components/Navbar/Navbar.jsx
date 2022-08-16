import React from 'react';
import PropTypes from 'prop-types';
import {
    menu,
    notification,
    oval,
    userProfile,
    plus
} from '../../utils/image';
import useScreenSize from '../../hooks/useScreenSize';
import './navbar.scss';

const Navbar = ({ handlerMenu, handlerModal }) => {

    const { width } = useScreenSize();

    return (
        <header className='header'>
            {
                width <= 1000
                    ?
                    <nav className='header__nav--menuMobile'>
                        <div className='header__nav--menu' onClick={handlerMenu}>
                            <img src={menu} alt="menu" />
                        </div>
                        <p className='header__logo--p'><b>lite</b>flix</p>
                        <div className='header__nav--userProfileMobile'>
                            <img src={userProfile} alt="user profile" />
                        </div>

                    </nav>
                    :
                    <>
                        <div className='header__logo'>
                            <p className='header__logo--p'><b>lite</b>flix</p>
                            <button className='header__logo--button' onClick={handlerModal}>
                                <img src={plus} alt="add a movie" />
                                agregar película
                            </button>
                        </div>
                        <nav className='header__nav'>
                            <div className='header__nav--menu' onClick={handlerMenu}>
                                <img src={menu} alt="menu" />
                            </div>
                            <div className='header__nav--notifications'>
                                <img src={notification} alt="notifications" />
                                <img src={oval} alt="oval" className='oval' />
                            </div>
                            <div className='header__nav--userProfile'>
                                <img src={userProfile} alt="user profile" />
                            </div>
                        </nav>
                    </>
            }
        </header>
    )
}

Navbar.propTypes = {
    handlerMenu: PropTypes.func,
    handlerModal: PropTypes.func,
}

export default Navbar;