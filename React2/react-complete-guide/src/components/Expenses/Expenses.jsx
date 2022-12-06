import React, { useState } from "react";
import "./expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
export default function Expenses({ items }) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = items.filter((e) => {
        return e.date.getFullYear().toString() === filteredYear;
    });

    const expenses = filteredExpenses.map((e) => (
        <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
        />
    ));

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = expenses;
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {expensesContent}
            </Card>
        </div>
    );
}
