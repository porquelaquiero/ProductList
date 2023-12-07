/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';
import PropTypes from 'prop-types';
import Container from "../atoms/Container";

const ProductPageContainer = ({children}) => (
    <Container css={style}>
        {children}
    </Container>
);

ProductPageContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductPageContainer;

const style = css`
    --outer-padding: 30px;
    --gap-between-components: 25px;
    --gap-within-component: 10px;

    flex-direction: column;
    padding: var(--outer-padding);
    gap: var(--gap-between-components);
`;
