"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DevHubTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: "mini-projects", label: "Mini Projects" },
  { id: "ai-code-review", label: "AI Code Review" },
];

export const DevHubTabs = ({ activeTab, setActiveTab }: DevHubTabsProps) => {
  return (
    <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden -mx-4 md:mx-0 px-4 md:px-0">
      <div className="flex gap-4 md:gap-8 border-b border-slate-100 w-full mb-6 min-w-max">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "pb-4 text-[14px] md:text-[15px] font-semibold transition-all relative shrink-0 cursor-pointer",
                isActive ? "text-[#066EFF]" : "text-slate-400 hover:text-slate-600",
              )}
            >
              <span className="px-2">{tab.label}</span>
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-[3px] bg-[#066EFF] rounded-t-full transition-all duration-300 ease-out transform",
                  isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
