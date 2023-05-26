import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CostSofar = () => {
  const { expenses } = useContext(AppContext);
  return (
    <div>
      Cost so far:{" "}
      {expenses.reduce((sum, item) => {
        return (sum += item.cost);
      }, 0)}
    </div>
  );
};
export default CostSofar;
