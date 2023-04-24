import React from "react";
import "../css/Market.css";

const Market = () => {
    return(
        <div className="Market">
            <div className="market-inner">
                <div className="products-wrapper">
                    <h2>판매 상품</h2>
                    {/*Product List*/}
                </div>
                <div className="basket-wrapper">
                    <h2>장바구니</h2>
                    {/*Basket List */}
                </div>
            </div>
            <div className="AddProduct">
                <h4>add</h4>
                {/*addProduct*/}
            </div>
        </div>
    )
}

export default Market;