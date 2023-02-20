import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import productApi from 'services/productApi';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import OpenDialog from 'features/auth/components/open-dialog';

ProductList.propTypes = {
  products: PropTypes.array,
};

function ProductList(props) {
  const { products } = props;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason && reason == 'backdropClick') return;
    setOpen(false);
  };
  return (
    <div>
      <p>Product Items : {products.length}</p>
      <button onClick={handleClickOpen}>Open dialog</button>
      <OpenDialog open={open} handleClose={handleClose}></OpenDialog>
    </div>
  );
}

export default ProductList;
