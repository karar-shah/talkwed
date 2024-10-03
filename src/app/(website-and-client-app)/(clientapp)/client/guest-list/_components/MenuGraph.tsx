import { cn } from "@/lib/utils";
import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Beef", value: 30, color: "#FF6B6B" },
  { name: "Chicken", value: 25, color: "#4ECDC4" },
  { name: "Child meal", value: 10, color: "#45B7D1" },
  { name: "Fish", value: 15, color: "#98DFEA" },
  { name: "Lamb", value: 12, color: "#D4A5A5" },
  { name: "Vegetarian", value: 8, color: "#77DD77" },
];

const MenuGraph = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-full max-w-md bg-white rounded-lg shadow-md p-4",
        className
      )}
    >
      <h2 className="text-xl font-semibold mb-4">Expense Graph</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center">
            <div
              className="w-4 h-4 mr-2"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-sm">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGraph;
