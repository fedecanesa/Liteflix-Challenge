import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './layout.scss';

const Layout = ({ children }) => {
    const { heroMovie, isLoading } = useSelector((state) => state?.movies);
    const base_url = `http://image.tmdb.org/t/p/original/${heroMovie?.poster_path}`;

    return (
        <div
            className="layout"
            style={isLoading
                ? { backgroundImage: "none", width: "100%" }
                : { backgroundImage: ` url(${base_url})`, width: "100%" }
            }
        >
            {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.elementType
}

export default Layout;