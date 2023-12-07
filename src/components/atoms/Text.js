/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';
import PropTypes from 'prop-types';

const Text = ({children, className = ''}) => (
    <span className={className} css={style}>{children}</span>
);

Text.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Text;

const style = css`
    min-width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`;
