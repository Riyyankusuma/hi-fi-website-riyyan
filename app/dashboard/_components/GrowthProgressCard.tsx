"use client";

import React from "react";
import { Target, Code2, Briefcase } from "lucide-react";

/**
 * GrowthProgressCard displays the user's progress in key areas using balanced circular charts.
 * Optimized for both desktop (lg:col-span-7) and mobile (responsive sizing).
 */

const growthProgress = [
  { 
    label: "Skills Mapped", 
    value: 12, 
    total: 20, 
    color: "#3B82F6", // Blue
    icon: Target 
  },
  { 
    label: "Projects Done", 
    value: 3, 
    total: 8, 
    color: "#10B981", // Emerald
    icon: Code2 
  },
  { 
    label: "Simulations", 
    value: 2, 
    total: 5, 
    color: "#F59E0B", // Orange/Amber
    icon: Briefcase 
  },
];

interface CircularProgressProps {
  value: number;
  total: number;
  color: string;
  icon: React.ElementType;
}

const CircularProgress = ({ value, total, color, icon: Icon }: CircularProgressProps) => {
  const percentage = (value / total) * 100;
  const circumference = 2 * Math.PI * 40; // Relative circumference for viewBox

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 sm:w-28 md:w-36 lg:w-40 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#F8FAFC"
            strokeWidth="8"
          />
          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={2 * Math.PI * 40}
            style={{ 
              strokeDashoffset: (2 * Math.PI * 40) - (percentage / 100) * (2 * Math.PI * 40),
              transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
              strokeLinecap: "round"
            }}
          />
        </svg>
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-80 transition-all duration-300 group-hover:scale-110"
          style={{ color }}
        >
          <Icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9" />
        </div>
      </div>
    </div>
  );
};

export const GrowthProgressCard = () => {
  return (
    <div
      className="bg-white rounded-[28px] p-5 md:p-8 lg:p-10 flex flex-col h-full gap-6 md:gap-8 transition-all hover:shadow-xl hover:shadow-slate-200/50 group border border-slate-100"
    >
      <div className="flex justify-between items-center px-1">
        <p className="text-[15px] md:text-[18px] font-semibold text-slate-800 tracking-tight">
          Growth Progress
        </p>
        <div className="flex items-center gap-1.5 md:gap-2">
           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
           <span className="text-[11px] md:text-[12px] font-medium text-slate-400 uppercase tracking-wider">
            THIS MONTH
          </span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-around gap-2 md:gap-6">
        {growthProgress.map((item) => (
          <div key={item.label} className="flex flex-col items-center flex-1">
            <CircularProgress {...item} />
            <div className="mt-4 md:mt-8 flex flex-col items-center text-center">
              <span className="text-[15px] sm:text-[18px] md:text-[24px] font-bold text-slate-800 tracking-tight whitespace-nowrap">
                {item.value}<span className="text-slate-200 mx-0.5 font-medium text-[13px] md:text-[18px]">/</span><span className="text-slate-400 font-medium text-[13px] md:text-[18px]">{item.total}</span>
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[12px] font-semibold text-slate-400 mt-0.5 uppercase tracking-tight sm:tracking-wider line-clamp-1">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
