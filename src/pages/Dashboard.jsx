import DashboardSummary from "../components/dashboard/DashboardSummary";
import DashboardHeader from "../components/dashboard/DashboardHeader";
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
import Modal from "../components/common/Modal";
import ExpenseForm from "../components/expenses/ExpenseForm";

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
const roommateTotals = roommates.map((roommate) => {

  const totalPaid = expenseList
    .filter((expense) => expense.paidBy === roommate.name)
    .reduce((sum, expense) => sum + expense.amount, 0);

  return {

    ...roommate,

    totalPaid,

  };

});
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
    <DashboardHeader
  onAddExpense={() => setShowAddExpense(true)}
/>

      <br />
      <Modal
  open={showAddExpense}
  title={
    editingExpense
      ? "Edit Expense"
      : "Add Expense"
  }
  onClose={() => {
    setShowAddExpense(false);
    setEditingExpense(null);
  }}
>
  <ExpenseForm
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
</Modal>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

      <DashboardSummary
  expenseList={expenseList}
  totalExpenses={totalExpenses}
  highestExpense={highestExpense}
  averageExpense={averageExpense}
  totalTransactions={totalTransactions}
/>

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

      {roommateTotals.map((person) => (

<PersonCard
  key={person.name}
  roommate={person}
  totalPaid={person.totalPaid}
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
    expense={expense}
    roommates={roommates}
    onDelete={deleteExpense}
    onEdit={handleEdit}
  />
))}
    </MainLayout>
);
}

export default Dashboard;