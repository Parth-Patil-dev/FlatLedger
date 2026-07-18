import Card from "../common/Card";
import Button from "../common/Button";

function ExpenseCard({
  expense,
  roommates,
  onEdit,
  onDelete,
}) {
  const person = roommates.find(
    (roommate) => roommate.name === expense.paidBy
  );

  return (
    <Card className="mb-4">
      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-xl font-bold">
            {expense.title}
          </h2>

          <p className="text-slate-500">
            {expense.category}
          </p>
        </div>

        <h2 className="text-2xl font-bold text-emerald-600">
          ₹{expense.amount}
        </h2>

      </div>

      <div className="flex justify-between mt-5 text-slate-500 text-sm">

        <span>
          Paid by {person?.name || expense.paidBy}
        </span>

        <span>
          {expense.date}
        </span>

      </div>

      <div className="flex justify-end gap-3 mt-5">

        <Button
          variant="secondary"
          onClick={() => onEdit(expense.id)}
        >
          Edit
        </Button>

        <Button
          variant="danger"
          onClick={() => onDelete(expense.id)}
        >
          Delete
        </Button>

      </div>
    </Card>
  );
}

export default ExpenseCard;