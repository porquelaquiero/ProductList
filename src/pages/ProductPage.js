/** @jsxImportSource @emotion/react */
import React, {useState} from 'react';
import ProductPageContainer from "../components/molecules/ProductPageContainer";
import ProductForm from "../components/molecules/ProductForm";
import ProductTable from "../components/molecules/ProductTable";

const ProductPage = () => {
    const [productTitle, setProductTitle] = useState('');
    const [source, setSource] = useState('YouTube');
    const [entries, setEntries] = useState([]);

    const handleTitleChange = (e) => setProductTitle(e.target.value);
    const handleSourceChange = (e) => setSource(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (productTitle.trim() === '') {
            return;
        }

        const newEntry = {
            productTitle,
            source,
        };

        setEntries([...entries, newEntry]);
        setProductTitle('');
    };

    const handleDelete = (index) => {
        const newEntries = [...entries];
        newEntries.splice(index, 1);
        setEntries(newEntries);
    };

    return (
        <ProductPageContainer>
            <ProductForm
                handleTitleChange={handleTitleChange}
                handleSourceChange={handleSourceChange}
                handleSubmit={handleSubmit}
                productValue={productTitle}
                sourceValue={source}
            />
            <ProductTable handleDelete={handleDelete} entries={entries} />
        </ProductPageContainer>
    );
};

export default ProductPage;
