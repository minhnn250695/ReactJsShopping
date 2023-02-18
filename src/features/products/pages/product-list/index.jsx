import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import productApi from 'services/productApi';

ProductList.propTypes = {};

function ProductList(props) {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData () {
      const response = await productApi.getAll();
      setProducts(response)
    };
    fetchData();
  },[]);
  return (
    <div>
      <p>Product Items : {products.length}</p>
    </div>
  );
}

export default ProductList;
