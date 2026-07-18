import Card from "./Card";

function Modal({
  open,
  title,
  children,
  onClose,
}) {
  if (!open) return null;
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

  return (
    

      <Card
        hover={false}
        className="w-[420px] max-w-[95%]"
      >
        <div className="flex justify-between items-center mb-5">

          <h2 className="text-xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>

        </div>

        {children}

      </Card>
  );
}

export default Modal;