import { cn } from "@/lib/utils";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

const data = [
  { name: "Adult", value: 3, color: "#5B6BC0" },
  { name: "Children", value: 0.1, color: "#4ECDC4" },
  { name: "Babies", value: 0.9, color: "#FF6B6B" },
  { name: "Unassigned", value: 0.9, color: "#FFA94D" },
];

const GuestGraph = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-full max-w-md bg-white rounded-lg shadow-md p-4",
        className
      )}
    >
      <h2 className="text-xl font-semibold mb-4">Guests</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[1, 2, 3, 4, 5]}
              domain={[0, 5]}
            />
            <Bar dataKey="value" radius={[5, 5, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center">
            <div
              className="w-4 h-4 mr-1"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-sm">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestGraph;
