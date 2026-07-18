import Card from "../common/Card";
function BalanceCard({ expenseList }) {

  const balances = {};

  expenseList.forEach((expense) => {

    const people = expense.splitBetween || [];

    if (people.length === 0) return;


    const share =
      expense.amount / people.length;


    // Person who paid gets credit
    balances[expense.paidBy] =
      (balances[expense.paidBy] || 0) 
      + expense.amount;


    // Everyone owes their share
    people.forEach((person)=>{

      balances[person] =
        (balances[person] || 0)
        - share;

    });

  });


  return (
    <card>

      <h2 className="text-xl font-bold mb-4">
        Balances
      </h2>


      {
        Object.entries(balances).map(
          ([person, amount]) => (

          <div
          key={person}
          className="flex justify-between py-2"
          >

            <span>
              {person}
            </span>


            <span
            className={
              amount >= 0
              ? "text-green-600"
              : "text-red-500"
            }
            >

              {amount >= 0 ? "+" : ""}
              ₹{Math.round(amount)}

            </span>

          </div>

        ))
      }

    </card>
  );
}

export default BalanceCard;