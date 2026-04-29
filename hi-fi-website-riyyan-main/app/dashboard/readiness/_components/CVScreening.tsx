"use client";

import React, { useState } from "react";
import {
  UploadCloud,
  FileText,
  Sparkles,
  Target,
  BarChart2,
  Star,
  Zap,
  ShieldCheck,
  LineChart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CVAnalysisView } from "./CVAnalysisView";
import { CVResultsView } from "./CVResultsView";

const analyzeItems = [
  {
    icon: Target,
    label: "Overall CV Score",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: BarChart2,
    label: "Section Breakdown",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Star,
    label: "Strengths & Weaknesses",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Zap,
    label: "Keyword Analysis",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: ShieldCheck,
    label: "ATS Compatibility",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: LineChart,
    label: "Role-Fit Score",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
];

const previousUploadsData = [
  { name: "Alex_Rahman_CV_v3.pdf", date: "Apr 10, 2026", score: 72 },
  { name: "Alex_Rahman_CV_v2.pdf", date: "Mar 28, 2026", score: 64 },
];

export const CVScreening = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleUpload = () => {
    setIsAnalyzing(true);
  };

  const handleAnalysisComplete = () => {
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
    setIsAnalyzing(false);
  };

  if (isAnalyzing) {
    return <CVAnalysisView onComplete={handleAnalysisComplete} />;
  }

  if (showResults) {
    return <CVResultsView onBack={handleBack} fileName="Alex_Rahman_CV_v3.pdf" />;
  }

  return (
    <div className="w-full animate-in fade-in duration-700 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-md border border-[#E8ECF0] p-6 md:p-8 flex flex-col items-center text-center relative group">
            <div className="w-14 h-14 bg-[#066EFF]/5 rounded-md flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <UploadCloud className="w-7 h-7 text-[#066EFF]" />
            </div>
            <h3 className="text-[16px] font-bold text-slate-800 font-poppins mb-1">
              Drop your CV here or click to browse
            </h3>
            <p className="text-slate-400 text-[12px] md:text-[13px] font-medium font-poppins mb-6 md:mb-8">
              PDF, DOC, DOCX — Max 10MB
            </p>
            <button 
              onClick={handleUpload}
              className="bg-[#066EFF] text-white px-8 py-2.5 rounded-md font-bold text-[14px] flex items-center gap-2 hover:bg-[#0052cc] transition-all active:scale-[0.98] cursor-pointer"
            >
              <UploadCloud className="w-4 h-4" />
              Choose File
            </button>
            <input 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer" 
              accept=".pdf,.doc,.docx"
              onChange={handleUpload}
            />
          </div>

          <div className="bg-white rounded-md border border-[#E8ECF0] p-4 md:p-6">
            <h4 className="text-[14px] font-bold text-slate-800 font-poppins mb-4 uppercase tracking-tight">
              Previous Uploads
            </h4>
            <div className="space-y-3">
              {previousUploadsData.map((file, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-3 rounded-md border border-slate-100/50 flex items-center justify-between gap-3 group hover:bg-white hover:border-blue-100 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center border border-slate-100 shrink-0 group-hover:border-blue-50 transition-colors">
                      <FileText className="w-5 h-5 text-[#066EFF]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="text-[13px] font-bold text-slate-700 font-poppins truncate block">
                        {file.name}
                      </h5>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-[11px] text-slate-400 font-medium font-poppins">
                          {file.date}
                        </p>
                        <div className="md:hidden flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-300" />
                          <span className="text-[11px] font-bold text-[#F59E0B] font-poppins">
                            {file.score}/100
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-5 shrink-0">
                    <span className="hidden md:block text-[14px] font-bold text-[#F59E0B] font-poppins">
                      {file.score}/100
                    </span>
                    <button className="text-[#066EFF] text-[12px] font-bold hover:underline cursor-pointer bg-white md:bg-transparent border border-slate-200 md:border-transparent px-2.5 py-1.5 md:p-0 rounded-md transition-all">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4 flex flex-col">
          <div className="bg-white rounded-md border border-[#E8ECF0] p-4 md:p-6 flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <h4 className="text-[14px] font-bold text-slate-800 font-poppins uppercase tracking-tight">
                What we analyze
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {analyzeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 md:p-3 rounded-md bg-slate-50 border border-slate-100/50 transition-all hover:border-slate-200"
                >
                  <div
                    className={cn(
                      "w-7 h-7 rounded-md flex items-center justify-center shrink-0",
                      item.bg,
                    )}
                  >
                    <item.icon className={cn("w-3.5 h-3.5", item.color)} />
                  </div>
                  <span className="text-[12px] font-medium text-slate-700 font-poppins">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#066EFF] rounded-md p-5 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl" />
            <div className="relative z-10">
              <h5 className="text-[14px] font-bold mb-1.5 font-poppins flex items-center gap-2 text-white uppercase tracking-tight">
                Pro Tip
              </h5>
              <p className="text-white/80 text-[11px] font-medium font-poppins leading-normal">
                Upload your latest CV to get the most accurate analysis. Apply
                our suggestions and re-upload for a better score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
