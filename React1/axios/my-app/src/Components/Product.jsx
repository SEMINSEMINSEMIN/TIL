import React from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Product() {
  useEffect(() => {
    // '마운트 될 때' '브라우저에 그려진 후' 딱 한 번 실행
    axios.get("http://test.api.weniv.co.kr/mall").then((res) => {
      console.log("axios");
      console.log(res); // Object
      console.log(res.data);
    });
    fetch("http://test.api.weniv.co.kr/mall")
      .then((res) => {
        console.log("fetch");
        console.log(res); // Response
        // console.log(res.json()) // pending됩니다.
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div>Product</div>;
}
