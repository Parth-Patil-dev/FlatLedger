export function getTotalExpenses(expenses) {
  return expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
}

export function getHighestExpense(expenses) {
  if (!expenses.length) return 0;

  return Math.max(
    ...expenses.map((expense) => expense.amount)
  );
}

export function getAverageExpense(expenses) {
  if (!expenses.length) return 0;

  return Math.round(
    getTotalExpenses(expenses) / expenses.length
  );
}

export function getCategoryTotals(expenses) {
  const totals = {};

  expenses.forEach((expense) => {
    totals[expense.category] =
      (totals[expense.category] || 0) +
      expense.amount;
  });

  return totals;
}

export function getRoommateTotals(
  expenses,
  roommates
) {
  return roommates.map((roommate) => {
    const totalPaid = expenses
      .filter(
        (expense) =>
          expense.paidBy === roommate.name
      )
      .reduce(
        (sum, expense) => sum + expense.amount,
        0
      );

    return {
      ...roommate,
      totalPaid,
    };
  });
}

export function getBalances(
  expenses,
  roommates
) {
  const total = getTotalExpenses(expenses);
  const share = total / roommates.length;

  return roommates.map((roommate) => {
    const paid = expenses
      .filter(
        (expense) =>
          expense.paidBy === roommate.name
      )
      .reduce(
        (sum, expense) => sum + expense.amount,
        0
      );

    return {
      ...roommate,
      paid,
      balance: paid - share,
    };
  });
}