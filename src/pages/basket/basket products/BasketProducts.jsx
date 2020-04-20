import React, { useContext } from "react";
import BasketTile from "./basket tile/BasketTile";
import { BasketProductsContext } from "../../../components/app/App";

const BasketProducts = () => {
    const basketContext = useContext(BasketProductsContext);
    return (
        <div className="col-md-6">
            <div className="row">
                {basketContext.basketProducts.map((product) => (
                    <BasketTile productInfo={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default BasketProducts;