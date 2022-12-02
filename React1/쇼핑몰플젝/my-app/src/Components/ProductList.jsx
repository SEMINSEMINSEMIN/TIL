import React from 'react'
import Heart from './Heart';
import { Link } from 'react-router-dom';

export default function ProductList({data}) {
    console.log(data);
    const productList = data.map((el) => {
        const imgLink = "https://test.api.weniv.co.kr/" + el.thumbnailImg;
        const pageLink = "/products/" + el.id;
        return (
            <li key={el.id}>
                <Link to={pageLink}><img src={imgLink}/></Link>
                <p>{el.productName}</p>
                <p>{el.price}원</p>
                <Heart/>
            </li>
        );
    });
    return <ul>{productList}</ul>
}
