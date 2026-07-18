import { useMemo, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ExpenseCard from "../components/expenses/ExpenseCard";
import ExpenseModal from "../components/expenses/ExpenseModal";
import Button from "../components/common/Button";
import { useExpense } from "../context/ExpenseContext";
import { roommates } from "../data/dummyData";
import { categories } from "../data/categories";

function Expenses() {
  const {
    expenseList,
    addExpense,
    editExpense,
    deleteExpense,
  } = useExpense();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [paidBy, setPaidBy] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const [showModal, setShowModal] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);

  const filteredExpenses = useMemo(() => {
    let data = [...expenseList];

    if (search) {
      data = data.filter((expense) =>
        expense.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      data = data.filter(
        (expense) => expense.category === category
      );
    }

    if (paidBy !== "All") {
      data = data.filter(
        (expense) => expense.paidBy === paidBy
      );
    }

    switch (sortBy) {
      case "Highest":
        data.sort((a, b) => b.amount - a.amount);
        break;

      case "Lowest":
        data.sort((a, b) => a.amount - b.amount);
        break;

      case "Oldest":
        data.reverse();
        break;

      default:
        break;
    }

    return data;
  }, [expenseList, search, category, paidBy, sortBy]);

  return (
    <MainLayout>

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold">
          Expenses
        </h1>

        <Button
          onClick={() => {
            setEditingExpense(null);
            setShowModal(true);
          }}
        >
          + Add Expense
        </Button>

      </div>

      {/* Search & Filters will come here */}

      {/* Expense List will come here */}

    </MainLayout>
  );
}

export default Expenses;