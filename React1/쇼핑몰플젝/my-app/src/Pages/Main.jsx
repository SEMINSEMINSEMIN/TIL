import React from "react";
import ProductList from "../Components/ProductList";
import CartBtn from "../Components/CartBtn";

export default function Main({data}) {
    return (
        <>
            <h1>쇼핑몰 페이지</h1>
            <ProductList data={data}/>
            <CartBtn/>
        </>
    );
}
