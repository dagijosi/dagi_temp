'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface PremiumChartProps {
  type: 'line' | 'bar' | 'area' | 'pie' | 'donut' | 'radialBar';
  series: ApexOptions['series'];
  options?: ApexOptions;
  height?: string | number;
  title?: string;
}

const PremiumChart: React.FC<PremiumChartProps> = ({ 
  type, 
  series, 
  options, 
  height = 350,
  title 
}) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const mergedOptions: ApexOptions = {
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: 'inherit',
    },
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'], // Simplified theme colors
    stroke: { curve: 'smooth', width: 3 },
    dataLabels: { enabled: false },
    ...options,
  };

  if (!isMounted) {
    return <div className="h-[200px] bg-theme-surface/95 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-theme-border animate-pulse" />;
  }

  return (
    <div className="bg-theme-surface/95 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-theme-border">
      {title && <h3 className="font-bold text-sm text-theme-text mb-4">{title}</h3>}
      <Chart 
        options={mergedOptions} 
        series={series} 
        type={type} 
        height={height} 
      />
    </div>
  );
};

export default PremiumChart;
