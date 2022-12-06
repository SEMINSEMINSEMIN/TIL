import React from "react";
import "./expenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}
