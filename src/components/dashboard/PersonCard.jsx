import Card from "../common/Card";
function PersonCard({ roommate, totalPaid }) {
  return (
    <card>

      <div className="flex items-center gap-3">

        <div className="text-4xl">
          {roommate.avatar}
        </div>

        <div>

          <h3 className="font-bold text-xl">
            {roommate.name}
          </h3>

          <p className="text-gray-500">
            Total Paid
          </p>

        </div>

      </div>

      <h2 className="text-3xl font-bold mt-6 text-emerald-600">
        ₹{totalPaid}
      </h2>

    </card>
  );
}

export default PersonCard;