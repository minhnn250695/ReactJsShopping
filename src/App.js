import { Container } from '@mui/material';
import Header from 'components/header';
import LoginFeature from 'features/auth/pages/login';
import CardFeature from 'features/cart';
import LayoutAbout from 'features/layout/about';
import LayoutContact from 'features/layout/contact';
import LayoutHeader from 'features/layout/header';
import Home from 'features/layout/home';
import LayoutProduct from 'features/layout/product';
import PaymentFeature from 'features/payment';
import ProductFeature from 'features/products';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <LayoutHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginFeature />} />
        {/* <Route path="/products" element={<ProductFeature />} /> */}
        <Route path="/products" element={<LayoutProduct />} />
        <Route path="/cart" element={<CardFeature />} />
        <Route path="/payment" element={<PaymentFeature />} />
        <Route path="/about" element={<LayoutAbout />} />
        <Route path="/contact" element={<LayoutContact />} />
        <Route path="*" element={<h1>Not Found this page !!! (404)</h1>} />
      </Routes>
    </div>
  );
}

export default App;
