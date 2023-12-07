/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';
import PropTypes from 'prop-types';
import {NOOP} from "../../utils/constants";

const Input = ({
   type = 'text',
   placeholder = '',
   value = '',
   onChange = NOOP,
   className = '',
}) => (
    <input
        css={inputStyle}
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

export default Input;

const inputStyle = css`
    padding: 8px;
    border: 1px solid lightgray;
    border-radius: 4px;
`;
