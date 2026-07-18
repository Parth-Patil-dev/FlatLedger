import {
Routes,
Route
} from "react-router-dom";
import Analytics from "./pages/Analytics";


import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Balances from "./pages/Balances";
import Profile from "./pages/Profile";


function App(){

return(

<Routes>

<Route
  path="/analytics"
  element={<Analytics />}
/>


<Route path="/analytics" element={<Analytics />} />


<Route
path="/"
element={<Dashboard />}
/>


<Route
path="/expenses"
element={<Expenses />}
/>


<Route
path="/balances"
element={<Balances />}
/>


<Route
path="/profile"
element={<Profile />}
/>


</Routes>


)

}


export default App;