function SummaryCard({ title, value, color = "text-emerald-600" }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-72">
      <p className="text-gray-500">{title}</p>

      <h1 className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </h1>
    </div>
  );
}

export default SummaryCard;