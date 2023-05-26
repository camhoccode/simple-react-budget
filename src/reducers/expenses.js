const expensesReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "REMOVE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.id),
      };
    case "SET_BUDGET":
      return { ...state, budget: action.payload };
    default:
      return state;
  }
};
export default expensesReducer;
