import React from 'react';
import './menu.scss';
import {
    close,
    userProfile,
    notification,
    oval,
    plus
} from '../../utils/image';
import { menuTitles } from '../../constants/menuEnum';
import useScreenSize from '../../hooks/useScreenSize';
import PropTypes from 'prop-types';

const Menu = ({ handlerMenu, handlerModal }) => {
    const { width } = useScreenSize();
    return (
        <div className='menu'>
            {
                width >= 1000
                    ?
                    <nav className='menu__nav'>
                        <div className='menu__nave--close' onClick={handlerMenu}>
                            <img src={close} alt="menu" />
                        </div>
                        <div className='menu__nav--user'>
                            <div className='menu__nav--notifications'>
                                <img src={notification} alt="notifications" />
                                <img src={oval} alt="oval" className='oval' />
                            </div>
                            <div className='menu__nav--userProfile'>
                                <img src={userProfile} alt="user profile" />
                            </div>
                        </div>
                    </nav>
                    :
                    <nav className='menu__nav'>
                        <div className='menu__nave--close' onClick={handlerMenu}>
                            <img src={close} alt="menu" />
                        </div>
                        <div className='menu__nav--logo'>
                            <p className='header__logo--p'><b>lite</b>flix</p>
                        </div>

                        <div className='menu__nav--userProfile'>
                            <img src={userProfile} alt="user profile" />
                        </div>

                    </nav>
            }


            <ul className='menu__list'>
                {
                    menuTitles.map((title, i) => {
                        if (title.ADD_MOVIES) {
                            return <li
                                className='menu__list--add'
                                key={i}
                                onClick={handlerModal}
                            >
                                <img src={plus} alt="Add" />
                                {title?.value}
                            </li>
                        }
                        return <li
                            className='menu__list--li'
                            key={i}
                        >
                            {title?.value}
                        </li>
                    })
                }

            </ul>
        </div >
    )
}

Menu.propTypes = {
    handlerMenu: PropTypes.func
}

export default Menu