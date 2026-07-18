import { useState, useEffect } from "react";

function Settings() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  function saveUser() {
    localStorage.setItem("currentUser", user);
    alert("Saved!");
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">

      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      <p className="mb-3">
        Who are you?
      </p>

      <select
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="border p-3 rounded-lg w-full"
      >
        <option value="">Select</option>
        <option>Parth</option>
        <option>Himanshu</option>
        <option>Rudra</option>
      </select>

      <button
        onClick={saveUser}
        className="bg-emerald-600 text-white px-5 py-3 rounded-xl mt-6"
      >
        Save
      </button>

    </div>
  );
}

export default Settings;