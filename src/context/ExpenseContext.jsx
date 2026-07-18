import { createContext, useContext, useEffect, useState } from "react";
import { expenses } from "../data/dummyData";
import toast from "react-hot-toast";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenseList, setExpenseList] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");

    return savedExpenses
      ? JSON.parse(savedExpenses)
      : expenses;
  });

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenseList)
    );
  }, [expenseList]);

  function addExpense(expense) {
    setExpenseList((prev) => [...prev, expense]);
    toast.success("Expense added!");
  }

  function editExpense(updatedExpense) {
    toast.success("Expense updated!");
    setExpenseList((prev) =>
      prev.map((expense) =>
        expense.id === updatedExpense.id
          ? updatedExpense
          : expense
      )
    );
  }

  function deleteExpense(id) {
    toast.success("Expense deleted!");

    setExpenseList((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  }

  return (
    <ExpenseContext.Provider
      value={{
        expenseList,
        addExpense,
        editExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpense() {
  return useContext(ExpenseContext);
}