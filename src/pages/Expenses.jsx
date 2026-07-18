import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ExpenseCard from "../components/expenses/ExpenseCard";
import { useExpense } from "../context/ExpenseContext";
import { exportExpensesToCSV } from "../utils/exportCSV";
import { exportExpensesToPDF } from "../utils/exportPDF";

function Expenses() {
  const { expenseList, deleteExpense } = useExpense();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const filteredExpenses = expenseList.filter((expense) => {
    const matchesSearch = expense.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All"
        ? true
        : expense.category === category;

    return matchesSearch && matchesCategory;
  });

  const sortedExpenses = [...filteredExpenses];

  switch (sortBy) {
    case "Highest Amount":
      sortedExpenses.sort((a, b) => b.amount - a.amount);
      break;

    case "Lowest Amount":
      sortedExpenses.sort((a, b) => a.amount - b.amount);
      break;

    case "Oldest":
      sortedExpenses.sort((a, b) => a.id - b.id);
      break;

    default:
      sortedExpenses.sort((a, b) => b.id - a.id);
  }

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">
        All Expenses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mb-6">

        <input
          type="text"
          placeholder="🔍 Search expenses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg p-3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Groceries">Groceries</option>
          <option value="Rent">Rent</option>
          <option value="Internet">Internet</option>
          <option value="Electricity">Electricity</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transport">Transport</option>
          <option value="Other">Other</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option>Newest</option>
          <option>Oldest</option>
          <option>Highest Amount</option>
          <option>Lowest Amount</option>
        </select>

        <button
          onClick={() => exportExpensesToCSV(expenseList)}
          className="bg-green-600 text-white rounded-lg px-4 py-3 hover:bg-green-700"
        >
          ⬇ Export CSV
        </button>

        <button
          onClick={() => exportExpensesToPDF(expenseList)}
          className="bg-blue-600 text-white rounded-lg px-4 py-3 hover:bg-blue-700"
        >
          📄 Export PDF
        </button>

      </div>

      {sortedExpenses.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          No expenses found.
        </div>
      ) : (
        sortedExpenses.map((expense) => (
          <ExpenseCard
            key={expense.id}
            id={expense.id}
            title={expense.title}
            category={expense.category}
            amount={expense.amount}
            paidBy={expense.paidBy}
            date={expense.date}
            onDelete={deleteExpense}
          />
        ))
      )}
    </MainLayout>
  );
}

export default Expenses;