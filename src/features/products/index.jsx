import { useEffect, useState } from 'react';
import productApi from 'services/productApi';
import ProductList from './pages/product-list';
import './styles.scss';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  // call api get product list
  let [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await productApi.getProductItems({page: 1, _limit:2});
      setProducts(response);
    }
    fetchData();
  }, []);
  
  return (
    <div>
      <h1>Product container</h1>
      <ProductList products={products}></ProductList>
    </div>
  );
}

export default ProductFeature;
