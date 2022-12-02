import React, { useState, useLayoutEffect, useContext } from "react";
import { ProductInfo } from "../context/context";
import axios from "axios";
import ProductCard from "../Components/ProductCard/ProductCard";
import CartBtn from "../Components/CartBtn/CartBtn";

const ProductItems = () => {
    const products = useContext(ProductInfo);
    return (
        <>
            {products.products.map((item) => (
                <ProductCard
                    key={item.id}
                    id={item.id}
                    productName={item.productName}
                    price={item.price}
                    thumbnailImg={item.thumbnailImg}
                />
            ))}
        </>
    );
};

export default function Main() {
    const [products, setProducts] = useState([]);

    useLayoutEffect(() => {
        axios
            .get("http://35.76.53.28:8080/mall")
            .then((res) => setProducts(res.data));
    }, []);

    return (
        <ProductInfo.Provider value={{ products: products }}>
            <h1>쇼핑몰 페이지</h1>
            <ul>
                <ProductItems />
            </ul>
            <CartBtn />
        </ProductInfo.Provider>
    );
}
