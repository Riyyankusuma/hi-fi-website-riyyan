"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const options = [
  {
    title: "FAQ",
    description: "Frequently asked questions",
    onClick: () => {},
  },
  {
    title: "Contact Support",
    description: "Get help from our team",
    onClick: () => {},
  },
  {
    title: "Report a Bug",
    description: "Let us know about issues",
    onClick: () => {},
  },
  {
    title: "Feature Request",
    description: "Suggest new features",
    onClick: () => {},
  },
];

export const SupportSettings = () => {
  return (
    <div className="p-5 md:p-10 space-y-6 md:space-y-8 w-full">
      <div className="space-y-1 md:space-y-1.5 px-0.5">
        <h2 className="text-[20px] md:text-[22px] font-semibold text-slate-900 font-poppins">
          Help & Support
        </h2>
        <p className="text-[14px] md:text-[15px] text-slate-400 font-normal font-poppins">
          Get help with using Wirapath
        </p>
      </div>

      <div className="space-y-3.5 md:space-y-4 w-full">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={option.onClick}
            className="w-full text-left p-4 md:p-6 bg-[#F8FAFC]/50 rounded-[16px] md:rounded-[20px] border-[0.8px] border-slate-100 flex items-center justify-between group hover:border-[#066EFF]/20 hover:bg-[#F8FAFC] transition-all cursor-pointer"
          >
            <div className="space-y-0.5 md:space-y-1">
              <h4 className="text-[15px] md:text-[16px] font-semibold text-slate-900 font-poppins group-hover:text-[#066EFF] transition-colors leading-tight">
                {option.title}
              </h4>
              <p className="text-[13px] md:text-[14px] text-slate-400 font-normal font-poppins leading-snug">
                {option.description}
              </p>
            </div>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover:text-[#066EFF] transition-colors group-hover:translate-x-1" />
          </button>
        ))}
      </div>
    </div>
  );
};
