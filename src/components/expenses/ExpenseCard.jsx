import { useState } from "react";

function ExpenseCard({
  id,
  title,
  category,
  amount,
  paidBy,
  date,
  onDelete,
  onEdit
}) {

  const [editing, setEditing] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-4 flex justify-between items-center">

      <div>
        <h2 className="font-bold text-lg">
          {title}
        </h2>

        <p className="text-gray-500">
          {category}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          {date}
        </p>
      </div>


      <div className="text-right">

        <h2 className="font-bold text-xl text-red-500">
          ₹{amount}
        </h2>

        <p className="text-gray-500">
          Paid by {paidBy}
        </p>


        <div className="flex gap-3 mt-4 justify-end">

          <button
            onClick={() => {
              setEditing(!editing);
              onEdit(id);
            }}
            className="text-blue-600 text-sm"
          >
            Edit
          </button>


          <button
            onClick={() => onDelete(id)}
            className="text-red-500 text-sm"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default ExpenseCard;