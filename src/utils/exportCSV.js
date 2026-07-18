export function exportExpensesToCSV(expenseList) {
  const headers = [
    "Title",
    "Category",
    "Amount",
    "Paid By",
    "Date",
  ];

  const rows = expenseList.map((expense) => [
    expense.title,
    expense.category,
    expense.amount,
    expense.paidBy,
    expense.date || "",
  ]);

  const csv = [
    headers,
    ...rows,
  ]
    .map((row) => row.join(","))
    .join("\n");

  const blob = new Blob([csv], {
    type: "text/csv",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "expenses.csv";

  link.click();

  URL.revokeObjectURL(url);
}