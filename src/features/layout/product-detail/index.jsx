import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import Colors from 'components/color';
import DetailsThumb from 'components/detail-thumb';
const state = {
  _id: '1',
  title: 'Nike Shoes',
  src: [
    '/images/product-01.jpg',
    '/images/product-02.jpg',
    '/images/product-03.jpg',
    '/images/product-04.jpg',
    '/images/product-05.jpg',
  ],
  description: 'UI/UX designing, html css tutorials',
  content:
    'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
  price: 23,
  colors: ['red', 'black', 'crimson', 'teal'],
  count: 1,
};

function LayoutProductDetail() {
  const [product, setProduct] = useState(state);
  //   const myRef = useRef();

  const handleTab = (index) => {
    // const images = this.myRef.current.children;
    // for (let i = 0; i < images.length; i++) {
    //   images[i].className = images[i].className.replace('active', '');
    // }
    // images[index].className = 'active';
  };

  useEffect(() => {
    // this.myRef.current.children[1].className = 'active';
  }, []);
  console.log('product.src[1]', product.src[1]);
  return (
    <div className="app">
      <div className="details" key={product._id}>
        <div className="big-img">
          <img src={product.src[1]} alt="Preview" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{product.title}</h2>
            <span>${product.price}</span>
          </div>
          <p>{product.description}</p>
          <p>{product.content}</p>

          <DetailsThumb images={product.src} tab={handleTab} />
          <button className="cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default LayoutProductDetail;
