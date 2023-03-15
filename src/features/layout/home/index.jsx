import React from 'react';
import './style.scss';
import LayoutHeader from '../header';
import LayoutFooter from '../footer';
import { margin } from '@mui/system';
import LayoutCart from '../cart';
import LayoutProduct from '../product';

Home.propTypes = {};

function Home(props) {
  return (
    <div>
        <LayoutProduct/>
        <div style={{marginTop: '200px'}}></div>
        <LayoutFooter/>
    </div>
  );
}

export default Home;
