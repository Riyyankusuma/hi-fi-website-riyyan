"use client";

import React from "react";
import {
  ShieldCheck,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: ShieldCheck,
    value: "62%",
    label: "Overall Readiness",
    color: "bg-[#F0F7FF] text-[#066EFF]",
  },
  {
    icon: BarChart3,
    value: "12",
    label: "Skills Mapped",
    color: "bg-[#F0FFF9] text-[#10B981]",
  },
  {
    icon: AlertTriangle,
    value: "4",
    label: "Critical Gaps",
    color: "bg-[#FFF1F1] text-[#EF4444]",
  },
  {
    icon: CheckCircle2,
    value: "5",
    label: "Strengths",
    color: "bg-[#F0FFF9] text-[#10B981]",
  },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-5 md:p-8 rounded-[24px] transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/20 active:scale-95"
          style={{ border: "1.2px solid #F1F5F9" }}
        >
          <div
            className={cn(
              "w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-[18px] flex items-center justify-center mb-4 md:mb-6",
              stat.color,
            )}
          >
            <stat.icon className="w-5 h-5 md:w-7 md:h-7" />
          </div>
          <div className="space-y-1.5">
            <div className="text-[28px] md:text-[36px] font-medium text-slate-900 leading-none tracking-tight">
              {stat.value}
            </div>
            <div className="text-[14px] md:text-[15px] font-medium text-slate-400 tracking-tight">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
