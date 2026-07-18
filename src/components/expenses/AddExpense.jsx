import { useState, useEffect } from "react";

function AddExpense({ 
  onAddExpense, 
  closeModal, 
  editingExpense 
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("Parth");
  const [date, setDate] = useState("");
  const [splitBetween, setSplitBetween] = useState([]);
  useEffect(() => {

  if (editingExpense) {

    setTitle(editingExpense.title);
    setCategory(editingExpense.category);
    setAmount(editingExpense.amount);
    setPaidBy(editingExpense.paidBy);
    setDate(editingExpense.date);

  }

}, [editingExpense]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Selected people:", splitBetween);

    if (!title || !category || !amount) {
      alert("Please fill all fields");
      return;
    }

    const expenseData = {

id: editingExpense 
? editingExpense.id 
: Date.now(),

title,
category,
amount:Number(amount),
paidBy,
date,

splitBetween

};

onAddExpense(expenseData);
    closeModal();

    setTitle("");
    setCategory("");
    setAmount("");
    setPaidBy("Parth");
    setDate("");
    setSplitBetween([]);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 mt-10"
    >
      <h2 className="text-2xl font-bold mb-5">
  {editingExpense ? "Edit Expense" : "Add Expense"}
</h2>

      <div className="grid gap-4">

        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg p-3"
        />

        
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-lg p-3"
        />

        <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="border p-2 rounded w-full"
>
  <option value="">Select Category</option>
  <option value="Food">Food</option>
  <option value="Groceries">Groceries</option>
  <option value="Rent">Rent</option>
  <option value="Electricity">Electricity</option>
  <option value="Transport">Transport</option>
  <option value="Entertainment">Entertainment</option>
  <option value="Other">Other</option>
</select>

        <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="border rounded-lg p-3"
/>

        <select
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option>Parth</option>
          <option>Himanshu</option>
          <option>Rudra</option>
        </select>
          <div className="mt-4">

  <p className="font-semibold mb-2">
    Split Between
  </p>

  <div className="flex gap-4">

    <label>
      <input
        type="checkbox"
        checked={splitBetween.includes("Parth")}
        onChange={(e) => {

          if (e.target.checked) {
            setSplitBetween([
              ...splitBetween,
              "Parth"
            ]);
          } else {
            setSplitBetween(
              splitBetween.filter(
                (person) => person !== "Parth"
              )
            );
          }

        }}
      />

      <span className="ml-1">
        Parth
      </span>

    </label>


    <label>
      <input
        type="checkbox"
        checked={splitBetween.includes("Himanshu")}
        onChange={(e) => {

          if (e.target.checked) {
            setSplitBetween([
              ...splitBetween,
              "Himanshu"
            ]);
          } else {
            setSplitBetween(
              splitBetween.filter(
                (person) => person !== "Himanshu"
              )
            );
          }

        }}
      />

      <span className="ml-1">
        Himanshu
      </span>

    </label>


    <label>
      <input
        type="checkbox"
        checked={splitBetween.includes("Rudra")}
        onChange={(e) => {

          if (e.target.checked) {
            setSplitBetween([
              ...splitBetween,
              "Rudra"
            ]);
          } else {
            setSplitBetween(
              splitBetween.filter(
                (person) => person !== "Rudra"
              )
            );
          }

        }}
      />

      <span className="ml-1">
        Rudra
      </span>

    </label>

  </div>

</div>

        <button
          className="bg-emerald-600 text-white p-3 rounded-lg hover:bg-emerald-700"
        >
          {editingExpense ? "Update Expense" : "➕ Add Expense"}
        </button>

      </div>
    </form>
  );
}

export default AddExpense;