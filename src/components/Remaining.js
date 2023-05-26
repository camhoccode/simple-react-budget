import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Remaining() {
  const { budget, expenses } = useContext(AppContext);
  const [sumCost, setSumCost] = useState(0);
  useEffect(() => {
    const totalCost = expenses.reduce((sum, item) => {
      return (sum += item.cost);
    }, 0);
    setSumCost(totalCost);
  }, [expenses, sumCost]);
  return (
    <div>
      <span>
        Remaining: {budget - sumCost}
        {budget <= sumCost && <p>{` (Not good !)`}</p>}
      </span>
    </div>
  );
}
