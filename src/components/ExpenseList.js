import React, { useContext, useState, useEffect } from "react";
import ExpenseListFilter from "./ExpenseListFilter";
import { AppContext } from "../context/AppContext";
import ExpenseListItem from "./ExpenseListItem";

export default function ExpenseList() {
  const { expenses } = useContext(AppContext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const handleFilterExpenses = (input) => {
    const tempExpenses = expenses.filter((expense) =>
      expense.expenseName.toLowerCase().includes(input),
    );
    setFilteredExpenses(tempExpenses);
  };
  return (
    <div>
      <h2>Costs</h2>
      <ExpenseListFilter filterExpenses={handleFilterExpenses} />
      <div>
        {!!expenses.length ? (
          filteredExpenses.map((item) => (
            <ExpenseListItem key={item.id} {...item} />
          ))
        ) : (
          <p>No Expenses Added</p>
        )}
      </div>
    </div>
  );
}
