"use client";

import React from "react";
import {
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Download,
  RefreshCcw,
  ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CVResultsViewProps {
  onBack: () => void;
  fileName: string;
}

const sectionScores = [
  { label: "Contact & Header", score: 90, status: "success" },
  { label: "Professional Summary", score: 55, status: "warning" },
  { label: "Technical Skills", score: 78, status: "success" },
  { label: "Work Experience", score: 62, status: "warning" },
  { label: "Projects", score: 70, status: "warning" },
  { label: "Education", score: 85, status: "success" },
  { label: "ATS Compatibility", score: 58, status: "warning" },
];

const roleFit = [
  { role: "Frontend Dev", match: 82, color: "bg-emerald-500" },
  { role: "Fullstack Dev", match: 58, color: "bg-amber-500" },
  { role: "Backend Dev", match: 42, color: "bg-red-500" },
];

const keywords = {
  found: ["JavaScript", "React", "Node.js", "Git", "SQL", "REST API"],
  missing: ["TypeScript", "Docker", "AWS", "CI/CD"],
};

export const CVResultsView: React.FC<CVResultsViewProps> = ({
  onBack,
  fileName,
}) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10 font-poppins">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-1 md:gap-2 min-w-0">
          <button 
            onClick={onBack}
            className="p-1.5 hover:bg-slate-100 rounded-md transition-colors cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[13px] font-medium text-slate-400 hidden sm:block">Back</span>
            <span className="text-[14px] font-semibold text-slate-700 truncate">
              {fileName}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 md:py-1.5 text-[13px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-all cursor-pointer">
            <Download className="w-3.5 h-3.5" />
            <span>Export</span>
          </button>
          <button 
            onClick={onBack}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 md:py-1.5 text-[13px] font-semibold text-white bg-[#066EFF] rounded-md hover:bg-[#0052cc] transition-all cursor-pointer"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            <span>Re-upload</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Sidebar Info */}
        <div className="lg:col-span-4 space-y-4">
          {/* Overall Score */}
          <div className="bg-white p-6 rounded-md border border-slate-100 flex flex-col items-center">
            <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-5">
              Overall CV Score
            </span>
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-slate-50"
                />
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={314}
                  strokeDashoffset={314 * (1 - 72 / 100)}
                  strokeLinecap="round"
                  className="text-amber-500"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[28px] font-semibold text-slate-800 leading-none">
                  72
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  /100
                </span>
              </div>
            </div>
          </div>

          {/* Role-Fit Match */}
          <div className="bg-white p-4 rounded-md border border-slate-100">
            <h4 className="text-[13px] font-semibold font-poppins text-slate-800 mb-3 uppercase tracking-tight">
              Role-Fit Match
            </h4>
            <div className="space-y-3.5">
              {roleFit.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-[12px] font-semibold">
                    <span className="text-slate-600">{item.role}</span>
                    <span className="text-slate-800">{item.match}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div
                      className={cn("h-full rounded-full", item.color)}
                      style={{ width: `${item.match}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords Found */}
          <div className="bg-white p-4 rounded-md border border-slate-100">
            <h4 className="text-[13px] font-semibold font-poppins text-slate-800 mb-3 uppercase tracking-tight">
              Keywords Found
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {keywords.found.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[11px] rounded-md border border-emerald-100"
                >
                  {kw}
                </span>
              ))}
            </div>

            <h4 className="text-[13px] font-semibold font-poppins text-slate-800 mb-2 uppercase tracking-tight">
              Missing
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {keywords.missing.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-red-50 text-red-600 text-[11px] rounded-md border border-red-100"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="lg:col-span-8 space-y-2">
          {sectionScores.map((section, idx) => (
            <div
              key={idx}
              className="group bg-white p-3.5 rounded-md border border-slate-100 hover:border-slate-200 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "p-2 rounded-md shrink-0",
                    section.status === "success"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600",
                  )}
                >
                  {section.status === "success" ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1.5">
                    <h5 className="text-[14px] font-semibold text-slate-700 truncate font-poppins">
                      {section.label}
                    </h5>
                    <span
                      className={cn(
                        "text-[14px] font-semibold",
                        section.status === "success"
                          ? "text-emerald-500"
                          : "text-amber-500",
                      )}
                    >
                      {section.score}%
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-slate-50 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-1000",
                          section.status === "success"
                            ? "bg-emerald-500"
                            : "bg-amber-500",
                        )}
                        style={{ width: `${section.score}%` }}
                      />
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
