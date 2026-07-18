export function calculateBalances(expenses, roommates){

const balances = {};

roommates.forEach(person=>{
    balances[person.name]=0;
});


expenses.forEach(expense=>{

    const splitAmount =
      expense.amount / roommates.length;


    roommates.forEach(person=>{

        if(person.name === expense.paidBy){

            balances[person.name]
            += expense.amount - splitAmount;

        }
        else{

            balances[person.name]
            -= splitAmount;

        }

    });

});


return balances;

}