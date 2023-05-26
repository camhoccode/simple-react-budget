import React, { useState } from "react";

export default function ExpenseListFilter(props) {
  const [inputChange, setInputChange] = useState("");
  const handleInputChange = (event) => {
    setInputChange(event.target.value);
    props.filterExpenses(event.target.value);
  };

  return (
    <form>
      <input type="text" value={inputChange} onChange={handleInputChange} />
    </form>
  );
}
