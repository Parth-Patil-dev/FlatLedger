import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="bg-white shadow-md px-8 py-5 flex justify-between items-center transition-colors duration-300">

      <h1 className="text-3xl font-bold text-emerald-600">
        🏠 FlatLedger
      </h1>

      <div className="flex gap-8 text-lg">

        <Link
          to="/"
          className="hover:text-emerald-600"
        >
          Dashboard
        </Link>

        <Link
          to="/expenses"
          className="hover:text-emerald-600"
        >
          Expenses
        </Link>

        <Link
          to="/"
          className="hover:text-emerald-600"
        >
          Analytics
        </Link>

        <Link
          to="/settings"
          className="hover:text-emerald-600"
        >
          Settings
        </Link>

      </div>

      <div className="flex items-center gap-5">


        <div className="font-semibold text-lg">
          👤 Parth
        </div>

      </div>

    </nav>
  );
}

export default Navbar;