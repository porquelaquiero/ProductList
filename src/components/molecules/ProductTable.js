/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';
import PropTypes from 'prop-types';
import Button from "../atoms/Button";
import Text from "../atoms/Text";

const ProductTable = ({
                          handleDelete,
                          entries,
                      }) => {
    return (
        <table css={tableStyle}>
            <thead>
            <tr css={tableHeaderStyle}>
                <th css={tableCellStyle}><Text>Product Title</Text></th>
                <th css={tableCellStyle}><Text>Source</Text></th>
                <th css={tableCellStyle}><Text>Action</Text></th>
            </tr>
            </thead>
            <tbody>
            {entries.map((entry, index) => (
                <tr key={index} css={tableRowStyle}>
                    <td css={tableCellStyle}>
                        <Text>{entry.productTitle}</Text>
                    </td>
                    <td css={tableCellStyle}><Text>{entry.source}</Text></td>
                    <td css={tableCellStyle}>
                        <Button
                            onClick={() => handleDelete(index)}
                            label={'Delete'}
                            css={buttonStyle}
                        />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

ProductTable.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    entries: PropTypes.array.isRequired,
};

export default ProductTable;

const tableStyle = css`
    width: 100%;
`;

const tableHeaderStyle = css`
    background: gray;
    text-align: left;
    padding: 10px;
`;

const tableRowStyle = css`
    background: lightgray;
`;

const tableCellStyle = css`
    padding: 15px;
`;

const buttonStyle = css`
    background: red;
    border: 1px solid red;
    width: 50%;
    margin: auto;
`;
