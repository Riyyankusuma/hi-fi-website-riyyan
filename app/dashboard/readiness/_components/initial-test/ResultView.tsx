"use client";

import React from "react";
import { Award, Clock, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { quizQuestions, sections } from "./quizData";

interface ResultViewProps {
  answers: Record<number, string>;
  timeTaken: number;
}

const ResultView: React.FC<ResultViewProps> = ({ answers, timeTaken }) => {
  const correctCount = quizQuestions.reduce((acc, q, index) => {
    return acc + (answers[index] === q.correctOption ? 1 : 0);
  }, 0);

  const totalQuestions = quizQuestions.length;
  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="w-full max-w-[850px] mx-auto animate-in fade-in duration-700 pb-8">
      <div className="bg-white rounded-[14px] border border-[#E8ECF0] overflow-hidden">
        <div className="bg-linear-to-br from-[#5D6AF2] to-[#066EFF] py-6 md:py-8 px-5 md:px-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-11 h-11 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 md:mb-4 backdrop-blur-md border border-white/20 shadow-xl">
              <Award className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <h2 className="text-[22px] md:text-[24px] font-semibold text-white mb-1 md:mb-1.5 font-poppins">
              Assessment Complete!
            </h2>
            <div className="flex items-center gap-2 text-white/80 text-[12px] md:text-[13px] font-medium font-poppins">
              <Clock className="w-3.5 h-3.5" />
              <span>Completed in {formatTime(timeTaken)}</span>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-8">
          <div className="flex flex-col items-center mb-8 md:mb-8">
            <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <defs>
                  <mask id="gap-mask">
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      stroke="white"
                      strokeWidth="10"
                      strokeDasharray="75.68 6"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </mask>
                </defs>
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  className="stroke-slate-100 fill-none"
                  strokeWidth="10"
                  mask="url(#gap-mask)"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  className="stroke-[#10B981] fill-none transition-all duration-1000 ease-out"
                  strokeWidth="10"
                  strokeDasharray="326.72"
                  strokeDashoffset={326.72 - (scorePercentage / 100) * 326.72}
                  strokeLinecap="round"
                  mask="url(#gap-mask)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[24px] md:text-[34px] font-semibold text-slate-800 font-poppins leading-none">
                  {scorePercentage}%
                </span>
              </div>
            </div>
            
            <h3 className="text-[16px] md:text-[17px] font-semibold text-slate-800 font-poppins mb-1">Great Job!</h3>
            <p className="text-slate-400 text-[12px] md:text-[13px] font-medium font-poppins text-center max-w-[280px] md:max-w-none">
              {correctCount}/{totalQuestions} MCQ correct · 9/13 tasks completed
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-[#F8FAFC] p-3.5 md:p-4 rounded-[14px] border border-slate-50 flex flex-col items-center text-center">
              <span className="text-[20px] md:text-[24px] font-semibold text-slate-800 font-poppins">100%</span>
              <span className="text-slate-400 text-[10px] md:text-[11px] font-semibold font-poppins mt-0.5 uppercase tracking-wider">MCQ Accuracy</span>
            </div>
            <div className="bg-[#F8FAFC] p-3.5 md:p-4 rounded-[14px] border border-slate-50 flex flex-col items-center text-center">
              <span className="text-[20px] md:text-[24px] font-semibold text-slate-800 font-poppins">{scorePercentage}%</span>
              <span className="text-slate-400 text-[10px] md:text-[11px] font-semibold font-poppins mt-0.5 uppercase tracking-wider">Task Completion</span>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-[14px] font-semibold text-slate-800 font-poppins mb-4">Section Breakdown</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sections.map((section) => {
                const sectionQuestions = quizQuestions.filter(q => q.category === section.name);
                const sectionCorrect = sectionQuestions.filter((q) => {
                  const globalIdx = quizQuestions.findIndex(gq => gq.id === q.id);
                  return answers[globalIdx] === q.correctOption;
                }).length;
                const isAllCorrect = sectionCorrect === sectionQuestions.length;

                return (
                  <div key={section.id} className="bg-[#F8FAFC] px-4 py-3.5 rounded-[12px] md:rounded-[14px] border border-slate-50 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={cn("w-1.5 h-1.5 rounded-full", isAllCorrect ? "bg-blue-500" : "bg-purple-500")} />
                        <span className="text-[13px] font-semibold text-slate-700 font-poppins truncate max-w-[120px] md:max-w-none">{section.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className={cn("w-3.5 h-3.5", isAllCorrect ? "text-emerald-500" : "text-slate-300")} />
                        <span className="text-[12px] font-semibold text-[#10B981] font-poppins">
                          {sectionCorrect}/{sectionQuestions.length}
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={cn("h-full transition-all duration-1000", isAllCorrect ? "bg-[#10B981]" : "bg-[#10B981]/60")} 
                        style={{ width: `${(sectionCorrect / sectionQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex justify-center px-2 md:px-0">
            <button 
              onClick={() => window.location.reload()}
              className="w-full md:w-auto bg-[#066EFF] text-white px-8 md:px-14 py-3.5 md:py-4 rounded-xl font-semibold text-[14px] md:text-[15px] flex items-center justify-center gap-3 hover:bg-[#0052cc] transition-all active:scale-[0.98] group cursor-pointer"
            >
               View Updated Readiness Score
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
