import React from "react";
import Heart from "../Heart/Heart";
import { Link } from "react-router-dom";
import ProductImage from "../ProductImage/ProductImage";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";

export default function ProductCard({ id, productName, price, thumbnailImg }) {
    const pageLink = "/products/" + id;
    const imgLink = "http://test.api.weniv.co.kr/" + thumbnailImg;
    return (
        <li>
            <Link to={pageLink}>
                <ProductImage src={imgLink} alt={productName} />
                <ProductName name={productName} />
                <ProductPrice price={price} />
            </Link>
            <Heart />
        </li>
    );
}
