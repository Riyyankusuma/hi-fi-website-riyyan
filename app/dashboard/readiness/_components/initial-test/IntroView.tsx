"use client";

import React from "react";
import { ClipboardCheck, ArrowRight } from "lucide-react";

interface IntroViewProps {
  onStart?: () => void;
}

export const IntroView = ({ onStart }: IntroViewProps) => {
  return (
    <div className="w-full flex justify-center pb-10">
      <div className="bg-white p-8 rounded-[16px] border border-[#E8ECF0] max-w-[850px] w-full flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F0F7FF] rounded-2xl flex items-center justify-center mb-5">
          <ClipboardCheck className="w-7 h-7 md:w-8 text-[#066EFF]" />
        </div>

        <h2 className="text-[24px] font-extrabold text-[#0D3E9B] mb-3">
          Initial Skill Assessment
        </h2>
        <p className="text-slate-500 text-[14px] max-w-lg mb-8 leading-relaxed">
          Complement your CV and GitHub analysis with a direct knowledge
          assessment. This test evaluates your skills across 7 categories to
          give a more accurate readiness score.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
          {[
            { label: "8 Questions", sub: "Multi-choice format" },
            { label: "~10 Minutes", sub: "No time pressure" },
            { label: "7 Categories", sub: "Full-stack coverage" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#F8FAFC] py-5 px-4 rounded-xl flex flex-col items-center justify-center transition-all hover:border-[#D1D5DB] border border-[#E8ECF0]"
            >
              <span className="text-[#1E293B] font-semibold text-[15px]">
                {item.label}
              </span>
              <span className="text-slate-400 text-[11px] mt-0.5 font-normal">
                {item.sub}
              </span>
            </div>
          ))}
        </div>

        <div
          className="bg-[#F0F7FF] p-5 rounded-xl text-left w-full mb-8"
          style={{ border: "1.2px solid #E0EFFF" }}
        >
          <h4 className="text-[#066EFF] font-semibold text-[14px] md:text-[15px] mb-1.5 font-poppins">
            How this helps your readiness score
          </h4>
          <p className="text-slate-500 text-[12px] md:text-[13px] leading-relaxed">
            Currently your score is based on CV analysis (12 skills) and GitHub
            activity. Taking this assessment adds a third evaluation dimension,
            making your Skill Map and Skill Gap analysis significantly more
            accurate.
          </p>
        </div>

        <button
          onClick={onStart}
          className="bg-[#066EFF] text-white px-8 md:px-12 py-3.5 md:py-4 rounded-xl font-semibold text-[15px] md:text-[16px] flex items-center gap-2.5 hover:bg-[#0052cc] transition-all active:scale-[0.98] group cursor-pointer"
        >
          Start Assessment
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
