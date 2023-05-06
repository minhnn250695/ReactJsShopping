import LoginFeature from 'features/auth/pages/login';
import LayoutAbout from 'features/layout/about';
import LayoutCart from 'features/layout/cart';
import LayoutContact from 'features/layout/contact';
import LayoutHeader from 'features/layout/header';
import Home from 'features/layout/home';
import LayoutProduct from 'features/layout/product';
import LayoutProductDetail from 'features/layout/product-detail';
import PaymentFeature from 'features/payment';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <LayoutHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginFeature />} />
        {/* <Route path="/products" element={<ProductFeature />} /> */}
        <Route path="/products" element={<LayoutProduct />} />
        <Route path="/product-detail/:id" element={<LayoutProductDetail />} />
        <Route path="/cart" element={<LayoutCart />} />
        <Route path="/payment" element={<PaymentFeature />} />
        <Route path="/about" element={<LayoutAbout />} />
        <Route path="/contact" element={<LayoutContact />} />
        <Route path="*" element={<h1>Not Found this page !!! (404)</h1>} />
      </Routes>
    </div>
  );
}

export default App;
