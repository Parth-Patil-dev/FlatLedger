import { useEffect, useState } from "react";
import { roommates } from "../../data/dummyData";
import { categories } from "../../data/categories";
import Button from "../common/Button";

function ExpenseForm({
  onAddExpense,
  editingExpense,
  closeModal,
}) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "General",
    paidBy: roommates[0]?.name || "",
    date: new Date().toISOString().split("T")[0],
    notes: "",
    splitType: "equal",
    settled: false,
  });

  useEffect(() => {
    if (editingExpense) {
      setFormData({
        ...editingExpense,
        notes: editingExpense.notes || "",
        splitType: editingExpense.splitType || "equal",
        settled: editingExpense.settled || false,
      });
    }
  }, [editingExpense]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title || !formData.amount) return;

    const expense = {
      ...formData,
      amount: Number(formData.amount),
      id: editingExpense
        ? editingExpense.id
        : Date.now(),
    };

    onAddExpense(expense);

    closeModal();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        name="title"
        placeholder="Expense Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      >
        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>

      <select
        name="paidBy"
        value={formData.paidBy}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      >
        {roommates.map((roommate) => (
          <option
            key={roommate.id}
            value={roommate.name}
          >
            {roommate.name}
          </option>
        ))}
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <textarea
        name="notes"
        rows="3"
        placeholder="Notes (optional)"
        value={formData.notes}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <div className="flex justify-end gap-3">
        <Button
          variant="secondary"
          onClick={closeModal}
        >
          Cancel
        </Button>

        <Button type="submit">
          {editingExpense
            ? "Save Changes"
            : "Add Expense"}
        </Button>
      </div>
    </form>
  );
}

export default ExpenseForm;