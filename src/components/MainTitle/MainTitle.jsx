import React from 'react';
import PropTypes from 'prop-types';
import './mainTitle.scss';

const MainTitle = ({ children }) => {
    return (
        <h1 className="mainTitle">
            {children}
        </h1>
    )
}

MainTitle.propTypes = {
    children: PropTypes.string
}

export default MainTitle;