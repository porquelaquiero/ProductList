/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';
import PropTypes from 'prop-types';
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Container from "../atoms/Container";
import Text from "../atoms/Text";

const ProductForm = ({
     handleTitleChange,
     handleSourceChange,
     handleSubmit,
     productValue,
     sourceValue,
 }) => (
    <Container>
        <form id={'product-form'} css={formStyle} onSubmit={handleSubmit}>
            <label css={labelStyle}>
                <Text>Product Title</Text>
                <Input type="text" value={productValue} onChange={handleTitleChange}/>
            </label>
            <label css={labelStyle}>
                <Text>Source</Text>
                <select value={sourceValue} onChange={handleSourceChange} css={selectStyle}>
                    <option value="YouTube">YouTube</option>
                    <option value="Google">Google</option>
                    <option value="ChatGPT">ChatGPT</option>
                </select>
            </label>
        </form>
        <Button
            form={'product-form'}
            type="submit"
            disabled={!productValue.trim()}
            label={'Submit'}
            css={buttonStyle}
        />
    </Container>
);

ProductForm.propTypes = {
    handleTitleChange: PropTypes.func.isRequired,
    handleSourceChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    productValue: PropTypes.string.isRequired,
    sourceValue: PropTypes.string.isRequired,
};

export default ProductForm;

const formStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--gap-within-component);
`;

const labelStyle = css`
    display: flex;
    gap: var(--gap-within-component);    
`;

const selectStyle = css`
    border: 1px solid lightgray;
    border-radius: 4px;
    height: 33px;
    cursor: pointer
`;

const buttonStyle = css`
    margin-left: 10px;
    height: auto; 
`;