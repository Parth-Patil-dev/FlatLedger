import Modal from "../common/Modal";
import ExpenseForm from "./ExpenseForm";

function ExpenseModal({
  open,
  onClose,
  onAddExpense,
  editingExpense
}) {

  return (
    <Modal
      open={open}
      title={
        editingExpense
          ? "Edit Expense"
          : "Add Expense"
      }
      onClose={onClose}
    >

      <ExpenseForm
        onAddExpense={onAddExpense}
        editingExpense={editingExpense}
        closeModal={onClose}
      />

    </Modal>
  );
}

export default ExpenseModal;