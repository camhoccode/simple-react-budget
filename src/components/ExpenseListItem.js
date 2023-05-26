import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ExpenseListItem(props) {
  const { dispatch } = useContext(AppContext);
  const handleRemoveExpense = () => {
    dispatch({ type: "REMOVE_EXPENSE", id: props.id });
  };
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.cost}</div>
      <button onClick={handleRemoveExpense}>Remove</button>
    </div>
  );
}
