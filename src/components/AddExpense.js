import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

export default function AddExpense() {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleAddExpense = (event) => {
    event.preventDefault();
    const newExpense = {
      id: uuidv4(),
      expenseName: name,
      cost: parseInt(cost),
    };
    // console.log(newExpense);
    dispatch({
      type: "ADD_EXPENSE",
      payload: newExpense,
    });
    setCost("");
    setName("");
    console.log("render add expense");
  };
  return (
    <div>
      <h2>AddExpense</h2>
      <form onSubmit={handleAddExpense}>
        <input
          type="text"
          value={name}
          placeholder="Spend name?"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="number"
          value={cost}
          placeholder="How much?"
          onChange={(event) => setCost(event.target.value)}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
