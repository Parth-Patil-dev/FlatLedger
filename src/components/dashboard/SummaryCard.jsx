import Card from "../common/Card";
function SummaryCard({ title, value }) {
  return (
    <Card>
      <p className="text-gray-500 text-sm">{title}</p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </Card>
  );
}

export default SummaryCard;