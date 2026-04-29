"use client";

import React from "react";
import { Zap } from "lucide-react";

export const WelcomeSection = ({
  name,
  streak,
}: {
  name: string;
  streak: number;
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-[24px] md:text-[30px] lg:text-[34px] font-extrabold text-[#0D3E9B] leading-tight">
          Welcome back, {name}! 👋
        </h1>
        <p className="text-[14px] md:text-[16px] text-slate-400 mt-1 md:mt-0 font-medium">
          Here&apos;s your career readiness overview.
        </p>
      </div>
      {/* <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-100 shadow-sm shadow-orange-100/50 transition-all hover:scale-[1.02] active:scale-95">
        <Zap className="w-4 h-4 text-orange-500 fill-orange-500" />
        <span className="text-[13px] md:text-[14px] font-bold text-orange-700 whitespace-nowrap">
          {streak} day streak!
        </span>
      </div> */}
    </div>
  );
};
