import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import productApi from 'services/productApi';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

ProductList.propTypes = {
  products: PropTypes.array,
};

function ProductList(props) {
  const { products } = props;
  return (
    <div>
      <p>Product Items : {products.length}</p>
    </div>
  );
}

export default ProductList;
