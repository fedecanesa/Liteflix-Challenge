import React from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import './notFound.scss';

const NotFound = props => {
    const navigate = useNavigate();
    const backHome = () => {
        navigate('/')
    }
    return (
        <div className='notFound'>
            <div className='notFound__text'>
                <h3>Oops!</h3>
                <h1>Your game hit a dead end</h1>
                <h2>Please go back to where you came from.</h2>
                <div className='buttonContainer'>
                    <button onClick={backHome}>BACK TO HOMEPAGE</button>
                </div>
            </div>
            <div className='notFoun__img'>
                <img src="https://litebox.ai/img/404.bdfcf63c.svg" alt="" />
            </div>
        </div>
    )
}

NotFound.propTypes = {}

export default NotFound