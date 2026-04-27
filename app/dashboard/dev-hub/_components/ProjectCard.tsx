"use client";

import React from "react";
import { Clock, Play, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  status: "Not Started" | "In Progress" | "Completed";
  duration: string;
  tag: string;
  progress?: number;
}

const levelConfigs = {
  Beginner: "bg-teal-50 text-teal-600",
  Intermediate: "bg-blue-50 text-blue-600",
  Advanced: "bg-red-50 text-red-600",
};

const statusConfigs = {
  "Not Started": "bg-slate-100/80 text-slate-400",
  "In Progress": "bg-orange-50 text-orange-500",
  Completed: "bg-emerald-50 text-emerald-500",
};

export const ProjectCard = ({
  title,
  description,
  level,
  status,
  duration,
  tag,
  progress,
}: ProjectCardProps) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-[24px] border border-[#F1F5F9] transition-all hover:shadow-xl hover:shadow-slate-200/20" style={{ border: '1.2px solid #F1F5F9' }}>
      <div className="flex flex-col h-full gap-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            <span
              className={cn(
                "px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[11px] md:text-[12px] font-semibold",
                levelConfigs[level],
              )}
            >
              {level}
            </span>
            <span
              className={cn(
                "px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[11px] md:text-[12px] font-semibold",
                statusConfigs[status],
              )}
            >
              {status}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 shrink-0">
            <Clock className="w-4 h-4" />
            <span className="text-[12px] md:text-[13px] font-medium font-poppins">
              {duration}
            </span>
          </div>
        </div>

        <div className="space-y-1.5 flex-1">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-slate-900 font-poppins leading-snug">
            {title}
          </h3>
          <p className="text-[14px] md:text-[15px] text-slate-500 font-normal leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="bg-slate-100 text-slate-500 text-[11px] md:text-[12px] font-semibold px-3 md:px-4 py-1 md:py-1.5 rounded-lg border border-slate-200/50">
            {tag}
          </span>
        </div>

        <div className="pt-2 mt-auto space-y-6">
          {(progress !== undefined || status === "Completed") && (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[13px] font-semibold font-poppins">
                <span className="text-slate-400">Progress</span>
                <span
                  className={
                    status === "Completed" ? "text-[#066EFF]" : "text-slate-600"
                  }
                >
                  {progress ?? 100}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-50">
                <div
                  className="h-full bg-[#066EFF] rounded-full transition-all duration-1000"
                  style={{ width: `${progress ?? 100}%` }}
                />
              </div>
            </div>
          )}

          <button
            className="w-full flex items-center justify-center gap-2.5 py-3.5 md:py-4 rounded-xl md:rounded-[18px] text-[14px] md:text-[15px] font-semibold bg-white text-slate-400 transition-all duration-300 group/btn cursor-pointer active:scale-95 shadow-sm"
            style={{ border: "1.2px solid #F1F5F9" }}
          >
            {status === "Completed" ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-slate-300 group-hover/btn:text-emerald-500 transition-colors duration-300" />
                <span className="group-hover/btn:text-emerald-500 transition-colors duration-300">
                  View Results
                </span>
              </>
            ) : status === "In Progress" ? (
              <>
                <Play className="w-5 h-5 text-slate-300 group-hover/btn:text-[#066EFF] transition-all duration-300" />
                <span className="group-hover/btn:text-[#066EFF] transition-colors duration-300">
                  Continue Project
                </span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 text-slate-300 group-hover/btn:text-slate-600 transition-colors duration-300" />
                <span className="group-hover/btn:text-slate-600 transition-colors duration-300">
                  Start Project
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
