import React from "react";
import { Link } from "react-router-dom";

export default function User() {
    return (
        <section>
            <h2>강세민님</h2>
            <p>마라탕에 목숨을 걸었다</p>
            <ul>
                <li>
                    <Link to="/users/coupon"> 쿠폰 확인 </Link>
                </li>
                <li>
                    <Link to="/users/question"> Q&A </Link>
                </li>
                <li>
                    <Link to="/users/notice"> 공지 확인 </Link>
                </li>
            </ul>
        </section>
    );
}
