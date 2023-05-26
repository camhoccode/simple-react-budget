import React from "react";

export default function BudgetView(props) {
  return (
    <div>
      <p>Budget: {props.budget}</p>
      <button onClick={props.showBudget}>Edit</button>
    </div>
  );
}
