// src/pages/DashboardHome.tsx (UI IMPROVED + Recharts)

import React from "react";
// Import Recharts components
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaRocket,
  FaChartBar,
} from "react-icons/fa";

// Dummy data for the Recharts Bar Chart
const chartData = [
  { name: "Jan", Sales: 4000, Revenue: 2400 },
  { name: "Feb", Sales: 3000, Revenue: 1398 },
  { name: "Mar", Sales: 2000, Revenue: 9800 },
  { name: "Apr", Sales: 2780, Revenue: 3908 },
  { name: "May", Sales: 1890, Revenue: 4800 },
  { name: "Jun", Sales: 2390, Revenue: 3800 },
];

// Data for the summary cards
const summaryData = [
  {
    title: "Total Sales",
    value: "$12,450",
    icon: FaDollarSign,
    color: "bg-green-500",
    ring: "ring-green-100",
  },
  {
    title: "New Users",
    value: "258",
    icon: FaUsers,
    color: "bg-blue-500",
    ring: "ring-blue-100",
  },
  {
    title: "Orders Placed",
    value: "1,540",
    icon: FaShoppingCart,
    color: "bg-yellow-500",
    ring: "ring-yellow-100",
  },
  {
    title: "Growth Rate",
    value: "+12.5%",
    icon: FaRocket,
    color: "bg-indigo-500",
    ring: "ring-indigo-100",
  },
];

const DashboardHome: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-extrabold text-gray-900 mb-6">
        Dashboard Overview
      </h1>{" "}
      {/* Decreased h1 size */}
      {/* 1. Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item) => (
          <div
            key={item.title}
            className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 transform hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {item.title}
                </p>{" "}
                {/* Decreased text size */}
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {item.value}
                </p>{" "}
                {/* Decreased text size */}
              </div>
              <div
                className={`p-3 rounded-full text-white ${item.color} bg-opacity-90 ring-4 ${item.ring}`}
              >
                <item.icon className="w-5 h-5" /> {/* Decreased icon size */}
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">Updated 5 minutes ago</p>
          </div>
        ))}
      </div>
      {/* 2. Main Content Widgets (Charts and Activity) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Chart Area (Recharts Integration) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <FaChartBar className="mr-2 text-indigo-500" /> Monthly Sales &
            Revenue
          </h3>

          {/* FIX: This container ensures a valid layout size before Recharts mounts */}
          <div className="relative flex-1 min-h-[350px] w-full">
            <ResponsiveContainer
              width="100%"
              height="100%"
              minWidth={0}
              minHeight={0}
            >
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 30, left: -10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "14px",
                  }}
                />
                <Legend
                  iconType="circle"
                  wrapperStyle={{ paddingTop: "10px" }}
                />
                <Bar dataKey="Sales" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity/Feed Placeholder */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 h-[450px] flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-3">
            Recent Activity
          </h3>
          <ul className="space-y-3 flex-1 overflow-y-auto">
            <li className="text-sm text-gray-700 border-b border-gray-100 pb-3">
              User **Alex** placed a new order.{" "}
              <span className="text-xs text-gray-400 float-right">
                2 min ago
              </span>
            </li>{" "}
            {/* Decreased text size */}
            <li className="text-sm text-gray-700 border-b border-gray-100 pb-3">
              Report **Q3 Sales** generated.{" "}
              <span className="text-xs text-gray-400 float-right">
                1 hour ago
              </span>
            </li>
            <li className="text-sm text-gray-700 border-b border-gray-100 pb-3">
              New user **Sarah** registered.{" "}
              <span className="text-xs text-gray-400 float-right">
                3 hours ago
              </span>
            </li>
            <li className="text-sm text-gray-700 border-b border-gray-100 pb-3">
              Campaign **Summer Sale** launched.{" "}
              <span className="text-xs text-gray-400 float-right">
                5 hours ago
              </span>
            </li>
            <li className="text-sm text-gray-700 border-b border-gray-100 pb-3">
              Payment processor **API** updated.{" "}
              <span className="text-xs text-gray-400 float-right">
                Yesterday
              </span>
            </li>
            <li className="text-sm text-gray-700">
              Team meeting scheduled.{" "}
              <span className="text-xs text-gray-400 float-right">
                2 days ago
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
