import Button from "../common/Button";

function DashboardHeader({ onAddExpense }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">

      <div>
        <h1 className="text-4xl font-bold">
          Good Afternoon 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back to FlatLedger
        </p>
      </div>

      <Button onClick={onAddExpense}>
        + Add Expense
      </Button>

    </div>
  );
}

export default DashboardHeader;