import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

ProductItem.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  detaiUrl: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number,
};

ProductItem.defaultProps = {
  img: 'images/product-01.jpg',
  alt: 'IMG-PRODUCT',
  detaiUrl: '/product-detail/1',
  productName: 'Esprit Ruffle Shirt',
  price: 16.64,
};

function ProductItem(props) {
  console.log(props);
  const { img, alt, detaiUrl, productName, price, id } = props;
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
      <div className="block2">
        <div className="block2-pic hov-img0">
          <img src={img} alt={alt} />
          <a className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 ">
            Quick View
          </a>
        </div>

        <div className="block2-txt flex-w flex-t p-t-14">
          <div className="block2-txt-child1 flex-col-l ">
            <NavLink className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6" to={detaiUrl}>
              {productName}
            </NavLink>

            <span className="stext-105 cl3">${price}</span>
          </div>

          <div className="block2-txt-child2 flex-r p-t-3">
            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
              <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
              <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
