import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./expensesList.css";

export default function ExpensesList(props) {
    const expenses = props.items.map((e) => (
        <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
        />
    ));

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    if (props.items.length > 0) {
        return <ul className="expenses-list">{expenses}</ul>;
    }
}
