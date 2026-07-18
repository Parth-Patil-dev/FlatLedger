function PersonCard({ name, paid }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-64 hover:shadow-xl transition">
      <div className="text-4xl mb-3">👤</div>

      <h2 className="text-xl font-bold">
        {name}
      </h2>

      <p className="text-gray-500 mt-2">
        Paid
      </p>

      <h1 className="text-2xl font-bold text-emerald-600 mt-1">
        ₹{paid}
      </h1>
    </div>
  );
}

export default PersonCard;