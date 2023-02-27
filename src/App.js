import { Container } from '@mui/material';
import Header from 'components/header';
import LoginFeature from 'features/auth/pages/login';
import CardFeature from 'features/cart';
import PaymentFeature from 'features/payment';
import ProductFeature from 'features/products';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<h1>This is Home Page</h1>} />
          <Route path="/login" element={<LoginFeature />} />
          <Route path="/products" element={<ProductFeature />} />
          <Route path="/cart" element={<CardFeature />} />
          <Route path="/payment" element={<PaymentFeature />} />
          <Route path="*" element={<h1>Not Found this page !!! (404)</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
