import React from 'react';
import ProductContainer from './product container/ProductContainer';
import DisplayProducts from '../../components/display products/DisplayProducts';

const ProductComponent = ({ productInfo }) => {
    return (
        <section className="product-wrapper">
            <ProductContainer productInfo={productInfo} />
            <DisplayProducts title="Check also" randomProducts={true} />
        </section>
    );
};

export default React.memo(ProductComponent);
