import "./App.css";
import AddExpense from "./components/AddExpense";
import EditBuget from "./components/EditBudget";
import ExpenseList from "./components/ExpenseList";
import AppProvider from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>My budget planner app</h1>
        <EditBuget />
        <ExpenseList />
        <AddExpense />
      </div>
    </AppProvider>
  );
}

export default App;
