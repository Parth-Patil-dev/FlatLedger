import { useState } from "react";
import BalanceCard from "../components/dashboard/BalanceCard";
import { useExpense } from "../context/ExpenseContext";
import MainLayout from "../layouts/MainLayout";
import PersonCard from "../components/dashboard/PersonCard";
import SummaryCard from "../components/dashboard/SummaryCard";
import ExpensePieChart from "../components/dashboard/ExpensePieChart";
import SettlementCard from "../components/dashboard/SettlementCard";
import ExpenseCard from "../components/expenses/ExpenseCard";
import { roommates } from "../data/dummyData";
import AddExpense from "../components/expenses/AddExpense";

function Dashboard() {
    const [editingExpense, setEditingExpense] = useState(null);
    const [showAddExpense, setShowAddExpense] = useState(false);
    const {
  expenseList,
  addExpense,
  editExpense,
  deleteExpense,
} = useExpense();
const totalExpenses = expenseList.reduce(
  (sum, expense) => sum + expense.amount,
  0
);
const totalTransactions = expenseList.length;
    const highestExpense =
  expenseList.length > 0
    ? Math.max(
        ...expenseList.map(
          (expense) => expense.amount
        )
      )
    : 0;
    const averageExpense =
  expenseList.length > 0
    ? Math.round(
        totalExpenses / expenseList.length
      )
    : 0;
    function handleEdit(id) {
  const expense = expenseList.find(
    (expense) => expense.id === id
  );

  setEditingExpense(expense);
  setShowAddExpense(true);
}
  return (
  <MainLayout>
      <h2 className="text-4xl font-bold">
        Good Afternoon 👋
      </h2>

      <p className="text-gray-500 mt-2">
        Welcome back to FlatLedger
      </p>
      <button
  onClick={() => setShowAddExpense(true)}
  className="mt-5 w-full sm:w-auto bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
>
  + Add Expense
  
</button>

      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        <BalanceCard 
  expenseList={expenseList}
/>
<SettlementCard
 expenseList={expenseList}
/>
  <SummaryCard
    title="Total Expenses"
    value={`₹${totalExpenses}`}
  />
  

  <SummaryCard
  title="Highest Expense"
  value={`₹${highestExpense}`}
  color="text-red-500"
/>

<SummaryCard
  title="Average Expense"
  value={`₹${averageExpense}`}
  color="text-green-600"
/>

  <SummaryCard
  title="Transactions"
  value={totalTransactions}
    color="text-purple-600"
  />
  
</div>


     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

  <ExpensePieChart
    expenseList={expenseList}
  />

  <BalanceCard
    expenseList={expenseList}
  />

</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

  <SettlementCard
    expenseList={expenseList}
  />

  <div className="bg-white rounded-xl shadow-md p-5">

    <h2 className="text-2xl font-bold mb-4">
      Roommates
    </h2>

    <div className="space-y-4">

      {roommates.map((person) => (

        <PersonCard
          key={person.id}
          name={person.name}
          paid={person.paid}
        />

      ))}

    </div>

  </div>

</div>

      <h2 className="text-2xl font-bold mt-10">
        Recent Expenses
      </h2>

      {expenseList.map((expense) => (
  <ExpenseCard
  key={expense.id}
  id={expense.id}
  title={expense.title}
  category={expense.category}
  amount={expense.amount}
  paidBy={expense.paidBy}
  date={expense.date}
  onDelete={deleteExpense}
  onEdit={handleEdit}
/>
))}
      {showAddExpense && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-xl p-6 w-[400px] shadow-xl">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-xl font-bold">
          Add Expense
        </h2>

        <button
          onClick={() => setShowAddExpense(false)}
          className="text-gray-500 hover:text-black"
        >
          ✕
        </button>

      </div>

      <AddExpense 
  onAddExpense={
    editingExpense 
    ? editExpense 
    : addExpense
  }
  editingExpense={editingExpense}
  closeModal={() => {
    setShowAddExpense(false);
    setEditingExpense(null);
  }}
/>

    </div>

  </div>
)}
    </MainLayout>
);
}

export default Dashboard;