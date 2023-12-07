/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';
import PropTypes from 'prop-types';
import {NOOP} from "../../utils/constants";

const Button = ({
    label,
    form = '',
    type = 'button',
    onClick = NOOP,
    disabled = false,
    className = '',
}) => (
    <button form={form} type={type} css={style} onClick={onClick} disabled={disabled} className={className}>
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    form: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

export default Button;

const style = css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 15px;
    cursor: pointer;
    border: 1px solid blue;
    background-color: blue;
    color: white;
    border-radius: 10px;
    font-size: 14px;
    transition: all 0.2s ease-in-out;
    
    :hover {
        transform: scale(1.05);
    }
    
    :disabled {
        cursor: unset;
        background-color: lightgray;
        border-color: lightgray;
        color: gray;
        
        :hover {
            transform: unset;
        }
    }
`;
