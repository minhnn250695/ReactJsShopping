import OpenDialog from 'components/open-dialog';
import PropTypes from 'prop-types';
import { useState } from 'react';

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
