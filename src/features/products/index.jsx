import ProductList from './pages/product-list';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import productApi from 'services/productApi';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

ProductFeature.propTypes = {};

function ProductFeature(props) {
    let navigate =  useNavigate();
  // call api get product list
  let [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await productApi.getAll();
      setProducts(response);
    }
    fetchData();
  }, []);

  const onclick = () =>{
    navigate('/login');

  }

  return (
    <div>
      <h1>Product container</h1>
      <ProductList products={products}></ProductList>
      <button onClick={onclick}>Logout</button>
    </div>
  );
}

export default ProductFeature;
