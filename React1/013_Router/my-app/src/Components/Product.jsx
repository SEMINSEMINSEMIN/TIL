import React from "react";
import { useLocation } from "react-router-dom";

export default function Product() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    return (
        <section>
            <h2>{path}번 메뉴: 화끈화끈 마라탕</h2>
        </section>
    );
}
