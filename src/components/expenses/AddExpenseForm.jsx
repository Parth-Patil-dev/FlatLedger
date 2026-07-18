import { useState } from "react";

function AddExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount) return;

    onAddExpense({
      id: Date.now(),
      title,
      category: "General",
      amount: Number(amount),
      paidBy: "Parth",
    });

    setTitle("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Expense name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />

      <button type="submit">
        Add Expense
      </button>
    </form>
  );
}

export default AddExpenseForm;