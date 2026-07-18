import Card from "../common/Card";
function SettlementCard({ expenseList }) {

  const balances = {};


  expenseList.forEach((expense) => {

   const people = expense.splitBetween?.includes(expense.paidBy)
?
expense.splitBetween
:
[
 expense.paidBy,
 ...(expense.splitBetween || [])
];

    if (people.length === 0) return;


    const share =
      expense.amount / people.length;


    balances[expense.paidBy] =
      (balances[expense.paidBy] || 0)
      + expense.amount;


    people.forEach((person)=>{

      balances[person] =
        (balances[person] || 0)
        - share;

    });

  });


  const creditors = [];
  const debtors = [];


  Object.entries(balances).forEach(
    ([person, amount])=>{

      if(amount > 0){
        creditors.push({
          person,
          amount
        });
      }


      if(amount < 0){
        debtors.push({
          person,
          amount: Math.abs(amount)
        });
      }

    }
  );


  const settlements = [];


  debtors.forEach((debtor)=>{

    creditors.forEach((creditor)=>{


      if(debtor.amount === 0)
        return;


      if(creditor.amount === 0)
        return;


      const payment = Math.min(
        debtor.amount,
        creditor.amount
      );


      settlements.push({

        from: debtor.person,

        to: creditor.person,

        amount: payment

      });


      debtor.amount -= payment;

      creditor.amount -= payment;


    });

  });



  return (

    <Card>


      <h2 className="text-xl font-bold mb-4">
        Settlement
      </h2>


      {
        settlements.length === 0

        ?

        <p className="text-gray-500">
          All settled 🎉
        </p>


        :

        settlements.map(
          (item,index)=>(

          <div
          key={index}
          className="flex justify-between py-2"
          >

            <span>
              {item.from}
              {" → "}
              {item.to}
            </span>


            <span className="text-red-500">
              ₹{item.amount.toFixed(2)}
            </span>


          </div>

        ))

      }


    </Card>

  );

}


export default SettlementCard;