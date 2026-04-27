"use client";

import React from "react";
import { Code2, Briefcase, Star, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tasks = [
  {
    type: "course",
    title: "REST API with Express",
    status: "In Progress — 65%",
    progress: 65,
    icon: Code2,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    statusColor: "text-amber-500",
  },
  {
    type: "interview",
    title: "Practice Interview",
    status: "Gojek · Software Engineer",
    icon: Briefcase,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    statusColor: "text-slate-400",
  },
];

export const UpcomingTasks = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      {tasks.map((task) => (
        <div
          key={task.title}
          className="bg-white rounded-[24px] p-5 md:p-6 border border-slate-100 flex flex-col gap-4 transition-all hover:shadow-xl hover:shadow-slate-200/50 group cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "w-12 h-12 rounded-[16px] flex items-center justify-center shrink-0",
                  task.iconBg
                )}
              >
                <task.icon className={cn("w-6 h-6", task.iconColor)} />
              </div>
              <div className="min-w-0">
                <h4 className="text-[15px] font-semibold text-slate-800 font-poppins tracking-tight">
                  {task.title}
                </h4>
                <p className={cn("text-[13px] font-medium", task.statusColor)}>
                  {task.status}
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
          {task.progress && (
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-1000 ease-in-out"
                style={{ width: `${task.progress}%` }}
              />
            </div>
          )}
        </div>
      ))}

      <div className="bg-linear-to-br from-[#5D6AF2] to-[#066EFF] rounded-[24px] p-6 text-white flex items-center justify-between transition-all hover:shadow-xl hover:shadow-blue-500/20 group cursor-pointer relative overflow-hidden grow">
        <div className="flex items-center gap-4 relative z-10 w-full">
          <div className="w-12 h-12 rounded-[16px] bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm">
            <Star className="w-6 h-6 text-white fill-white/20" />
          </div>
          <div className="grow min-w-0 pr-4">
            <h4 className="text-[17px] font-bold font-poppins tracking-tight leading-tight">
              Take Initial Assessment
            </h4>
            <p className="text-[14px] text-white/90 font-medium mt-1">
              Boost your readiness accuracy
            </p>
          </div>
          <ChevronRight className="w-6 h-6 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
        </div>
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-5 -mb-5 blur-xl" />
      </div>
    </div>
  );
};
