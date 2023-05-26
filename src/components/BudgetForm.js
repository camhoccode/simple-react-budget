import React, { useState } from "react";

export default function BudgetForm(props) {
  const [inputValue, setInputValue] = useState(props.budget);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleEditBudget(inputValue);
  };
  return (
    <div>
      <form action="" onSubmit={handleFormSubmit}>
        <input
          type="number"
          // defaultValue={2000}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
