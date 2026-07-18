import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportExpensesToPDF(expenseList) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("FlatLedger Expense Report", 14, 20);

  const tableData = expenseList.map((expense) => [
    expense.title,
    expense.category,
    `₹${expense.amount}`,
    expense.paidBy,
    expense.date || "-",
  ]);

  autoTable(doc, {
    head: [["Title", "Category", "Amount", "Paid By", "Date"]],
    body: tableData,
    startY: 30,
  });

  const total = expenseList.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  doc.text(
    `Total Expenses: ₹${total}`,
    14,
    doc.lastAutoTable.finalY + 15
  );

  doc.save("FlatLedger_Report.pdf");
}