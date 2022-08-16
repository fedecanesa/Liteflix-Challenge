import React from 'react'
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({
    content,
    disabled,
    name,
    type,
    icon,
    color,
    textColor,
    border,
    opacity,
    onClick
}) => {

    return (
        <button
            disabled={disabled}
            name={name}
            type={type}
            className='button'
            style={{
                backgroundColor: `${color}`,
                border: `${border}`,
                color: `${textColor}`,
                opacity: `${opacity}`
            }}
            onClick={onClick}
        >
            {
                icon && <img src={icon} alt={content} style={{ marginRight: "12px" }} />
            }
            {content}
        </button >
    )
}

Button.propTypes = {
    content: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    border: PropTypes.string,
    opacity: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;