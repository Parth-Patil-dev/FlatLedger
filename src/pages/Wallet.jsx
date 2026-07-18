import BalanceCard from "../components/dashboard/BalanceCard";
import SettlementCard from "../components/dashboard/SettlementCard";


function Balances(){

return(

<div>

<h1 className="text-3xl font-bold mb-5">
Balances
</h1>


<BalanceCard
expenseList={[]}
/>


<SettlementCard
expenseList={[]}
/>


</div>

)

}


export default Balances;