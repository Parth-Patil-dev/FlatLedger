import { createContext, useContext, useEffect, useState } from "react";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {

  const [expenseList, setExpenseList] = useState(() => {

    const savedExpenses = localStorage.getItem("expenses");

    return savedExpenses
      ? JSON.parse(savedExpenses)
      : [];

  });


  useEffect(() => {

    localStorage.setItem(
      "expenses",
      JSON.stringify(expenseList)
    );

  }, [expenseList]);



  function addExpense(expense) {

    const newExpense = {
      ...expense,
      id: Date.now(),
    };

    setExpenseList((prev) => [
      ...prev,
      newExpense
    ]);

  }



  function deleteExpense(id) {

    setExpenseList((prev) =>
      prev.filter(
        (expense)=>expense.id !== id
      )
    );

  }



  function editExpense(updatedExpense) {

    setExpenseList((prev)=>
      prev.map((expense)=>
        expense.id === updatedExpense.id
        ? updatedExpense
        : expense
      )
    );

  }



  return (

    <ExpenseContext.Provider
      value={{
        expenseList,
        addExpense,
        deleteExpense,
        editExpense
      }}
    >

      {children}

    </ExpenseContext.Provider>

  );

}


export function useExpense(){

  return useContext(ExpenseContext);

}