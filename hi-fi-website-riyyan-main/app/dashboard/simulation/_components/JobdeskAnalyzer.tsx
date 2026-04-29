"use client";

import React, { useState } from "react";
import { Search, FileSearch } from "lucide-react";

export const JobdeskAnalyzer = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (!jobDescription.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {}, 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 flex-1 min-h-[500px] md:min-h-[600px] pb-0 lg:pb-[32px]">
      <div className="lg:col-span-5 h-[400px] lg:h-full min-h-0">
        <div
          className="bg-white rounded-[24px] overflow-hidden flex flex-col h-full transition-all hover:shadow-xl hover:shadow-slate-200/20"
          style={{ border: "1.2px solid #F1F5F9" }}
        >
          <div className="px-5 md:px-6 py-3.5 md:py-4 border-b border-[#F1F5F9] bg-slate-50/50 shrink-0">
            <h3 className="text-[17px] md:text-[18px] font-semibold text-slate-900 font-poppins text-left">
              Paste Job Description
            </h3>
          </div>
          <div className="flex-1 p-5 md:p-6 min-h-0 flex flex-col">
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste a job description here to analyze how it matches your profile..."
              className="flex-1 w-full bg-transparent border-none outline-none resize-none text-[14px] md:text-[15px] text-slate-700 placeholder:text-slate-400 font-normal leading-relaxed font-poppins min-h-[250px]"
            />
          </div>
          <div className="px-5 md:px-6 py-5 border-t border-[#F1F5F9] bg-white shrink-0">
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !jobDescription.trim()}
              className="w-full h-12 md:h-14 rounded-xl md:rounded-[16px] bg-[#066EFF] text-white text-[14px] md:text-[15px] font-semibold font-poppins hover:bg-blue-600 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2.5 shadow-sm"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Analyzing Match...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Analyze Job Description</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 h-[400px] lg:h-full min-h-0">
        <div
          className="bg-white rounded-[24px] overflow-hidden flex flex-col h-full shadow-sm shadow-slate-200/5 transition-all hover:shadow-xl hover:shadow-slate-200/20"
          style={{ border: "1.2px solid #F1F5F9" }}
        >
          <div className="px-5 md:px-6 py-3.5 md:py-4 border-b border-[#F1F5F9] bg-slate-50/50 shrink-0">
            <h3 className="text-[17px] md:text-[18px] font-semibold text-slate-900 font-poppins text-left">
              Analysis Results
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-10 text-center space-y-4 min-h-0">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-[24px] flex items-center justify-center mb-2 border border-slate-100 shadow-sm shadow-slate-200/10">
              <FileSearch className="w-8 h-8 md:w-10 md:h-10 text-slate-300" />
            </div>
            <div className="space-y-2 px-4">
              <h4 className="text-[17px] md:text-[18px] font-semibold text-slate-900 font-poppins">
                Paste a job description to analyze
              </h4>
              <p className="text-slate-400 text-[14px] md:text-[15px] font-normal max-w-sm leading-relaxed font-poppins">
                We&apos;ll compare it against your skills and suggest improvements
                to your profile for this role.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
