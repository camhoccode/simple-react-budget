import { createContext, useReducer } from "react";
import expensesReducer from "../reducers/expenses";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  budget: 2000,
  expenses: [
    {
      id: uuidv4(),
      expenseName: "car",
      cost: 2222,
    },
    {
      id: uuidv4(),
      expenseName: "houses",
      cost: 22552,
    },
    {
      id: uuidv4(),
      expenseName: "mouse",
      cost: 112,
    },
  ],
};

// @ts-ignore
export const AppContext = createContext();

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(expensesReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
