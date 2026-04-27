"use client";

import React from "react";
import { Plus } from "lucide-react";

export const DevHubHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="space-y-1 md:space-y-1.5">
        <h1 className="text-[24px] md:text-[28px] font-semibold text-slate-900 font-poppins leading-tight">
          Development Hub
        </h1>
        <p className="text-[14px] md:text-[16px] text-slate-500 font-normal">
          Build real projects and get AI-powered code feedback
        </p>
      </div>

      <button className="flex items-center gap-2 bg-[#066EFF] text-white px-5 md:px-6 py-3 md:py-3.5 rounded-xl md:rounded-[18px] text-[14px] md:text-[15px] font-semibold shadow-lg shadow-blue-500/25 active:scale-95 transition-all">
        <Plus className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
        <span className="whitespace-nowrap">New Project</span>
      </button>
    </div>
  );
};
