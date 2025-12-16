import React, { useState } from "react";
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
  FaArrowUp,
  FaClock,
} from "react-icons/fa";

// Dummy data for the Recharts Bar Chart
const chartData = [
  { name: "Jan", Sales: 4000, Revenue: 2400 },
  { name: "Feb", Sales: 3000, Revenue: 1398 },
  { name: "Mar", Sales: 2000, Revenue: 9800 },
  { name: "Apr", Sales: 2780, Revenue: 3908 },
  { name: "May", Sales: 1890, Revenue: 4800 },
  { name: "June", Sales: 2390, Revenue: 3800 },
];

// Data for the summary cards
const summaryData = [
  {
    title: "Total Sales",
    value: "$12,450",
    change: "+15.3%",
    isPositive: true,
    icon: FaDollarSign,
    color: "from-green-500 to-emerald-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    title: "New Users",
    value: "258",
    change: "+8.2%",
    isPositive: true,
    icon: FaUsers,
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
  },
  {
    title: "Orders Placed",
    value: "1,540",
    change: "-2.5%",
    isPositive: false,
    icon: FaShoppingCart,
    color: "from-orange-400 to-red-500",
    shadow: "shadow-orange-500/20",
  },
  {
    title: "Growth Rate",
    value: "12.5%",
    change: "+4.1%",
    isPositive: true,
    icon: FaRocket,
    color: "from-purple-500 to-pink-600",
    shadow: "shadow-purple-500/20",
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-theme-surface/90 backdrop-blur-md border border-theme-border/50 p-3 rounded-lg shadow-xl text-sm">
        <p className="font-semibold text-theme-text mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center space-x-2 mb-1 last:mb-0">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
            <span className="text-theme-text/80">{entry.name}:</span>
            <span className="font-medium text-theme-text ml-auto">
                {entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

import CustomDropdown from "../components/ui/CustomDropdown";

const DashboardHome: React.FC = () => {
  const [timeRange, setTimeRange] = useState("Last 6 Months");

  return (
    <div className="container mx-auto p-6 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold text-theme-text tracking-tight">
                Dashboard Overview
            </h1>
            <p className="text-theme-text/60 mt-1 text-sm">
                Welcome back, here's what's happening today.
            </p>
        </div>
        <div className="flex space-x-3">
             <button className="px-4 py-2 bg-theme-surface border border-theme-border/50 text-theme-text text-sm font-medium rounded-lg shadow-sm hover:bg-theme-surface/80 hover:border-theme-border transition-all hover:-translate-y-0.5 backdrop-blur-md">
                Download Report
             </button>
        </div>
      </div>

      {/* 1. Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item) => (
          <div
            key={item.title}
            className={`group bg-theme-surface/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-theme-border/30 hover:border-theme-border/60 transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 rounded-xl text-white bg-gradient-to-br ${item.color} ${item.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-6 h-6" />
              </div>
              {item.change && (
                <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${item.isPositive ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {item.isPositive ? <FaArrowUp className="w-3 h-3 mr-1" /> : <div className="w-3 h-3 mr-1 rotate-180"><FaArrowUp /></div>}
                    {item.change}
                </div>
              )}
            </div>
            
            <div>
              <p className="text-3xl font-bold text-theme-text tracking-tight group-hover:text-theme-icon transition-colors">
                {item.value}
              </p>
              <p className="text-sm font-medium text-theme-text/50 mt-1">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Main Content Widgets (Charts and Activity) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Large Chart Area (Recharts Integration) */}
        <div className="lg:col-span-2 bg-theme-surface/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-theme-border/30 flex flex-col min-h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-theme-text flex items-center">
                <FaChartBar className="mr-2 text-theme-icon" /> Monthly Analytics
            </h3>
            <CustomDropdown 
                options={["Last 6 Months", "Last Year", "All Time"]} 
                selected={timeRange} 
                onSelect={setTimeRange} 
            />
          </div>

          <div className="relative flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                barSize={20}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" strokeOpacity={0.4} />
                <XAxis 
                    dataKey="name" 
                    stroke="var(--color-text)" 
                    strokeOpacity={0.5} 
                    fontSize={12} 
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                />
                <YAxis 
                    stroke="var(--color-text)" 
                    strokeOpacity={0.5} 
                    fontSize={12} 
                    tickLine={false}
                    axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'var(--color-text)', opacity: 0.05}} />
                <Legend 
                    wrapperStyle={{ paddingTop: "20px" }}
                    iconType="circle"
                    formatter={(value) => <span className="text-theme-text text-sm font-medium ml-1">{value}</span>}
                />
                <Bar 
                    dataKey="Sales" 
                    fill="var(--color-primary)" 
                    radius={[10, 10, 0, 0]} 
                    animationDuration={1500}
                />
                <Bar 
                    dataKey="Revenue" 
                    fill="#10b981" 
                    radius={[10, 10, 0, 0]} 
                    animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity/Feed */}
        <div className="bg-theme-surface/70 backdrop-blur-md p-0 rounded-2xl shadow-lg border border-theme-border/30 h-[450px] flex flex-col overflow-hidden">
          <div className="p-6 border-b border-theme-border/30 bg-theme-surface/30">
             <h3 className="text-xl font-bold text-theme-text flex items-center">
                <FaClock className="mr-2 text-theme-icon" /> Recent Activity
             </h3>
          </div>
          
          <div className="p-4 space-y-4 flex-1 overflow-hidden">
            {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-theme-bg/50 transition-colors group cursor-default">
                    <div className="relative flex-shrink-0">
                         <div className="w-10 h-10 rounded-full bg-theme-icon/10 flex items-center justify-center text-theme-icon group-hover:bg-theme-icon group-hover:text-white transition-colors duration-300">
                            <FaShoppingCart className="w-4 h-4" />
                         </div>
                         {i % 2 === 0 && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-theme-surface rounded-full"></span>}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-theme-text truncate">
                            New order #245{i} placed by <span className="font-bold">Alex Doe</span>
                        </p>
                        <p className="text-xs text-theme-text/50 mt-1">
                            2 minutes ago
                        </p>
                    </div>
                </div>
            ))}
            
            <div className="text-center pt-2">
                <button className="text-sm text-theme-icon hover:text-theme-icon/80 font-medium">
                    View All Activity
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardHome;
