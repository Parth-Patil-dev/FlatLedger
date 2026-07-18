import { NavLink } from "react-router-dom";

function Navbar() {
  const navItem =
    "px-3 py-2 rounded-lg transition-colors duration-200";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-emerald-600">
          🏠 FlatLedger
        </h1>

        <div className="flex gap-3">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navItem} ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "hover:bg-emerald-100"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/expenses"
            className={({ isActive }) =>
              `${navItem} ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "hover:bg-emerald-100"
              }`
            }
          >
            Expenses
          </NavLink>

          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              `${navItem} ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "hover:bg-emerald-100"
              }`
            }
          >
            Wallet
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${navItem} ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "hover:bg-emerald-100"
              }`
            }
          >
            Analytics
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${navItem} ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "hover:bg-emerald-100"
              }`
            }
          >
            Settings
          </NavLink>

        </div>

        <div className="font-semibold text-slate-700">
          👤 Parth
        </div>

      </div>
    </nav>
  );
}

export default Navbar;