import React from 'react'
import Heart from './Heart';

export default function ProductList({data}) {
    console.log(data);
    const productList = data.map((el) => {
        const imgLink = "https://test.api.weniv.co.kr/" + el.thumbnailImg;
        return (
            <li key={el.id}>
                <img src={imgLink}/>
                <p>{el.productName}</p>
                <p>{el.price}원</p>
                <Heart/>
            </li>
        );
    });
    return <ul>{productList}</ul>
}
