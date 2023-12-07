/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';
import PropTypes from 'prop-types';

const Container = ({children, className = ''}) => (
    <div css={containerStyle} className={className}>
        {children}
    </div>
);

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Container;

const containerStyle = css`   
    display: flex;
    margin: auto;
`;
