import React from 'react';
import PropTypes from 'prop-types';
import useScreenSize from '../../hooks/useScreenSize';
import './mainTitle.scss';

const MainTitle = ({ children }) => {
    const { width } = useScreenSize();
    return (
        <h1
            className="mainTitle"
            style={
                width >= 1000
                    ? children?.length > 12
                        ? { fontSize: '6vw' }
                        : { fontSize: '8vw' }
                    : { fontSize: '8vw' }
            }
        >
            {children}
        </h1>
    )
}

MainTitle.propTypes = {
    children: PropTypes.string
}

export default MainTitle;