import React from 'react';
import PropTypes from 'prop-types';
import ProductList from './pages/product-list';

ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    return (
        <div>
            <h1>Product container</h1>
            <ProductList></ProductList>
        </div>
    );
}

export default ProductFeature;