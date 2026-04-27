"use client";

import React from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ClipboardList 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AssessmentViewProps {
  onStart: () => void;
  onBack?: () => void;
}

const sections = [
  {
    title: "Data Analysis",
    description: "Analyze datasets, identify patterns, and draw logical conclusions from data.",
    dotColor: "bg-blue-500",
  },
  {
    title: "Design Brief",
    description: "Review client requirements and translate them into visual solutions.",
    dotColor: "bg-purple-500",
  },
  {
    title: "Problem Solving",
    description: "Apply algorithmic thinking to solve complex technical challenges.",
    dotColor: "bg-emerald-500",
  },
  {
    title: "Web Development",
    description: "Demonstrate core engineering principles in web technologies.",
    dotColor: "bg-orange-500",
  },
];

export const AssessmentView: React.FC<AssessmentViewProps> = ({ onStart, onBack }) => {
  return (
    <div className="w-full max-w-[800px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 pb-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#94A3B8] hover:text-slate-600 transition-colors mb-5 group cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="text-[14px] font-medium font-poppins">Back to Readiness Center</span>
      </button>

      <div className="bg-white rounded-[14px] border border-slate-100 overflow-hidden">
        <div className="bg-linear-to-br from-[#5D6AF2] to-[#066EFF] p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24 blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-md border border-white/10 shadow-xl">
              <ClipboardList className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-[26px] md:text-[28px] font-semibold text-white mb-2 font-poppins tracking-tight">
              Initial Skill Assessment
            </h2>
            <p className="text-white/80 text-[14px] md:text-[15px] font-medium font-poppins max-w-[460px]">
              Evaluate your readiness across key engineering domains through our assessment.
            </p>
          </div>
        </div>

        <div className="px-6 md:px-10 py-8">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {[
              { label: "13 Tasks", icon: BookOpen, color: "text-blue-600 bg-blue-50/50 border-blue-100" },
              { label: "15-20 Mins", icon: Clock, color: "text-emerald-600 bg-emerald-50/50 border-emerald-100" },
              { label: "Verified Score", icon: CheckCircle2, color: "text-purple-600 bg-purple-50/50 border-purple-100" },
            ].map((stat) => (
              <div 
                key={stat.label}
                className={cn(
                  "flex items-center gap-2 px-4 py-1.5 rounded-full border text-[13px] font-semibold font-poppins",
                  stat.color
                )}
              >
                <stat.icon className="w-4 h-4" />
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6 max-w-[640px] mx-auto">
            <h3 className="text-[15px] font-semibold text-[#1E293B] mb-4 font-poppins">Assessment Sections</h3>
            <div className="grid grid-cols-1 gap-3">
              {sections.map((section) => (
                <div 
                  key={section.title}
                  className="bg-[#F8FAFC] p-4 rounded-[14px] border border-slate-50 flex items-center justify-between group transition-all cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("w-1 h-8 rounded-full", section.dotColor)} />
                    <div>
                      <h4 className="text-[14px] font-semibold text-slate-800 font-poppins leading-none mb-1">
                        {section.title}
                      </h4>
                      <p className="text-[12px] text-slate-400 font-medium font-poppins">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={onStart}
              className="bg-[#066EFF] text-white px-10 py-3.5 rounded-xl font-semibold text-[15px] flex items-center gap-3 hover:bg-[#0052cc] transition-all active:scale-[0.98] group cursor-pointer"
            >
              Start Assessment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
