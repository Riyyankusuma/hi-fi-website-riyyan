"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const skillsNeedAttention = [
  { name: "System Design", progress: 28, color: "bg-red-500" },
  { name: "Testing & QA", progress: 35, color: "bg-orange-500" },
  { name: "Database Design", progress: 42, color: "bg-amber-500" },
  { name: "API Development", progress: 55, color: "bg-blue-500" },
];

export const SkillsNeedAttentionCard = () => {
  return (
    <div
      className="bg-white rounded-[24px] p-5 md:p-8 h-full flex flex-col gap-6 transition-all hover:shadow-xl hover:shadow-orange-500/5"
      style={{ border: "1.2px solid #F1F5F9" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <AlertTriangle className="size-4 text-orange-500" />
          <h3 className="text-[15px] font-medium text-slate-700 tracking-tight font-poppins">
            Skills Need Attention
          </h3>
        </div>
        <button className="text-[13px] md:text-[14px] font-medium cursor-pointer text-[#066EFF] hover:underline transition-colors tracking-tight">
          View All
        </button>
      </div>
      <div className="space-y-5 md:space-y-6">
        {skillsNeedAttention.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[13px] md:text-[14px] font-medium text-slate-700 tracking-tight">
                {skill.name}
              </span>
              <span className="text-[12px] md:text-[13px] font-medium text-slate-400">
                {skill.progress}%
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full transition-all duration-1000 ease-in-out",
                  skill.color,
                )}
                style={{ width: `${skill.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
