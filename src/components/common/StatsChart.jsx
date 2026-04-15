import { PieChart, Pie, Cell, Legend } from "recharts";

const StatsChart = () => {

    const data = [
  { name: "Text", value: 100 },
  { name: "Call", value: 100 },
  { name: "Video", value: 100 },
];

    const COLORS = ["#244D3F", "#7F37F5", "#37A163"];
    return (
        <div className="flex justify-center">
           <PieChart width={300} height={300}>
        <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={80}
        outerRadius={100}
        paddingAngle={5}
        dataKey="value"
        cornerRadius={5}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart> 
        </div>
    );
};

export default StatsChart;