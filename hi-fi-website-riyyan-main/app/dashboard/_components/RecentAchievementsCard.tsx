"use client";

import React from "react";
import { Award, Trophy, Star, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
  {
    icon: Trophy,
    title: "First Project Completed",
    sub: "Built a REST API",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Star,
    title: "Code Reviewed",
    sub: "Got AI feedback on 3 files",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: FileText,
    title: "CV Uploaded",
    sub: "Skills extracted from CV",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
];

export const RecentAchievementsCard = () => {
  return (
    <div
      className="bg-white rounded-[24px] p-5 md:p-8 h-full flex flex-col gap-5 transition-all hover:shadow-xl hover:shadow-indigo-500/5"
      style={{ border: "1.2px solid #F1F5F9" }}
    >
      <div className="flex items-center gap-3">
        <Award className="w-5 h-5 text-[#066EFF]" />
        <h3 className="text-[15px] font-medium text-slate-700 tracking-tight font-poppins">
          Recent Achievements
        </h3>
      </div>
      <div className="space-y-3 md:space-y-4">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 p-3 rounded-[20px] border border-slate-50 bg-[#F8FAFC] transition-all hover:bg-white hover:shadow-md hover:shadow-slate-200/50"
          >
            <div
              className={cn(
                "w-11 h-11 md:w-12 md:h-12 rounded-[14px] flex items-center justify-center shrink-0",
                item.bgColor
              )}
            >
              <item.icon className={cn("w-5 h-5 md:w-6 md:h-6", item.color)} />
            </div>
            <div className="min-w-0">
              <h4 className="text-[13px] md:text-[14px] font-medium text-slate-700 truncate font-poppins">
                {item.title}
              </h4>
              <p className="text-[11px] md:text-[12px] font-medium text-slate-400 truncate">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
