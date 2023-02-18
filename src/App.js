import './App.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import ProductFeature from 'features/products';
import PaymentFeature from 'features/payment';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <h1>This is Home Page</h1> },
    { path: '/product', element: <ProductFeature /> },
    { path: '/payment', element: <PaymentFeature /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
