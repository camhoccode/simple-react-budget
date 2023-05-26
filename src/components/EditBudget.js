import React, { useContext, useState } from "react";
import BudgetForm from "./BudgetForm";
import BudgetView from "./BudgetView";
import Remaining from "./Remaining";
import CostSofar from "./CostSofar";
import { AppContext } from "../context/AppContext";

export default function EditBudget() {
  const { dispatch, budget } = useContext(AppContext);
  const [viewBudget, setViewBudget] = useState(false);
  const showBudget = () => {
    setViewBudget((viewBudget) => {
      return !viewBudget;
    });
  };
  const handleEditBudget = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    showBudget();
  };

  return (
    <div>
      <div>
        {!viewBudget ? (
          <BudgetView budget={budget} showBudget={showBudget} />
        ) : (
          <BudgetForm budget={budget} handleEditBudget={handleEditBudget} />
        )}
      </div>
      <Remaining />
      <CostSofar />
    </div>
  );
}
