import React from 'react'
import PropTypes from 'prop-types';
import PacmanLoader from "react-spinners/PacmanLoader";
import './loader.scss';

const Loader = ({ loading }) => {
    return (
        <div className="loader">
            <PacmanLoader loading={loading} size={40} color='#64eebc' />
        </div>
    )
}

Loader.propTypes = {
    loading: PropTypes.bool,
}

export default Loader;