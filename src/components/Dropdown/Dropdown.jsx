import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    updateFilter,
} from '../../features/movies/moviesSlice';

import {
    arrow,
    check,
    rectangle
} from '../../utils/image';
import PropTypes from 'prop-types';
import './dropdown.scss';

const Dropdown = () => {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
    const { filterStatus, myMovies } = useSelector((state) => state?.movies);

    /**
     * When the button is clicked, set the state of isActive to the opposite of what it currently is.
     */
    const onClick = () => setIsActive(!isActive);

    /**
     * When the user selects a value from the dropdown, update the filter and call the onClick function.
     */
    const handleSelected = (e) => {
        const { target: { value } } = e;
        if (value === 'mis peliculas' && myMovies.length === 0) {
            return
        } else {
            onClick();
            dispatch(updateFilter(value))
        }
    }

    return (
        <div className='dropdown'>
            <div className='dropdown__filter'>
                <h4 className='dropdown__filter--h4'>
                    VER:
                    <span>{filterStatus}</span>
                </h4>
                <img src={arrow} alt="Arrow" onClick={onClick} />
            </div>

            <div
                className={`menuDropdown ${isActive ? "active" : "inactive"}`}
            >
                <div className='menuDropdown__options'>
                    <img src={rectangle} alt="rectangle" className='rectangle' />
                    <ul onClick={handleSelected}>
                        <option
                            value="populares"
                            className={filterStatus === "populares" ? "selected" : ""}
                        >
                            populares
                        </option>

                        <option
                            value="mis peliculas"
                            className={filterStatus === "mis peliculas" ? "selected" : ""}
                            style={myMovies.length > 0 ? { cursor: 'pointer' } : { cursor: 'not-allowed' }}
                        >
                            mis peliculas
                        </option>
                        <img
                            src={check}
                            alt="check"
                            className={filterStatus === "populares" ? "popular" : "mis_peliculas"}
                        />
                    </ul>

                </div>
            </div>
        </div >
    )
}

Dropdown.propTypes = {
    onClick: PropTypes.func,
    handleSelected: PropTypes.func,
    isActive: PropTypes.bool,
    setIsActive: PropTypes.func,
    filterStatus: PropTypes.string
}

export default Dropdown;