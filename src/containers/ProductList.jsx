import React from 'react';
import ProductItem from '../components/ProdcutItem';
import '../styles/ProductList.scss';

const ProductList = () => {
    return (
       <section className="main-container">
           <div className="ProductList">
            <ProductItem />
           </div>
       </section>
    );
}

export default ProductList;
