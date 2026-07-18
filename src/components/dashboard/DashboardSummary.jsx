import BalanceCard from "./BalanceCard";
import SettlementCard from "./SettlementCard";
import SummaryCard from "./SummaryCard";

function DashboardSummary({
  expenseList,
  totalExpenses,
  highestExpense,
  averageExpense,
  totalTransactions,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

      <BalanceCard expenseList={expenseList} />

      <SettlementCard expenseList={expenseList} />

      <SummaryCard
        title="Total Expenses"
        value={`₹${totalExpenses}`}
      />

      <SummaryCard
        title="Highest Expense"
        value={`₹${highestExpense}`}
      />

      <SummaryCard
        title="Average Expense"
        value={`₹${averageExpense}`}
      />

      <SummaryCard
        title="Transactions"
        value={totalTransactions}
      />

    </div>
  );
}

export default DashboardSummary;