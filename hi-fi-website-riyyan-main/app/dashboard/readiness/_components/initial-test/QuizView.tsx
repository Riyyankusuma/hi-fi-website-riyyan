"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Database,
  Layout,
  Code2,
  Globe,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { quizQuestions, sections } from "./quizData";

interface QuizViewProps {
  onComplete: (answers: Record<number, string>, time: number) => void;
  onBack?: () => void;
}

const sectionIcons: Record<string, React.ReactNode> = {
  "Data Analysis": <Database className="w-5 h-5 md:w-6 md:h-6" />,
  "Design Brief": <Layout className="w-5 h-5 md:w-6 md:h-6" />,
  "Problem Solving": <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
  "Web Development": <Globe className="w-5 h-5 md:w-6 md:h-6" />,
};

const sectionColors: Record<
  string,
  { text: string; border: string; bg: string; pill: string; dot: string }
> = {
  "Data Analysis": {
    text: "text-blue-500",
    border: "border-blue-500",
    bg: "bg-blue-50",
    pill: "text-blue-500 bg-blue-50",
    dot: "bg-blue-500",
  },
  "Design Brief": {
    text: "text-purple-500",
    border: "border-purple-500",
    bg: "bg-purple-50",
    pill: "text-purple-500 bg-purple-50",
    dot: "bg-purple-500",
  },
  "Problem Solving": {
    text: "text-emerald-500",
    border: "border-emerald-500",
    bg: "bg-emerald-50",
    pill: "text-emerald-500 bg-emerald-50",
    dot: "bg-emerald-500",
  },
  "Web Development": {
    text: "text-orange-500",
    border: "border-orange-500",
    bg: "bg-orange-50",
    pill: "text-orange-500 bg-orange-50",
    dot: "bg-orange-500",
  },
};

const QuizView: React.FC<QuizViewProps> = ({ onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const question = quizQuestions[currentQuestion];
  const colors =
    sectionColors[question.category] ?? sectionColors["Data Analysis"];
  const activeSection = sections.find((s) => s.name === question.category);
  const completedCount = Object.keys(answers).length;

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((p) => p + 1);
    } else {
      onComplete(answers, elapsed);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion((p) => p - 1);
  };

  const handleOptionSelect = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: optionId }));
  };

  return (
    <div className="w-full max-w-[850px] mx-auto animate-in fade-in duration-500 pb-6">
      <div className="flex justify-between items-center mb-4 md:mb-5">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-[13px] md:text-[14px] font-semibold font-poppins">
            <span className="hidden md:inline">{currentQuestion === 0 ? "Back" : "Previous Section"}</span>
            <span className="md:hidden">Back</span>
          </span>
        </button>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex items-center gap-1.5 border border-[#E8ECF0] px-3 py-1 rounded-full bg-white">
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-[12px] md:text-[14px] font-semibold font-poppins text-slate-700">
              {formatTime(elapsed)}
            </span>
          </div>
          <span className="text-[12px] md:text-[14px] font-semibold font-poppins text-[#066EFF]">
            {completedCount}/{quizQuestions.length} <span className="hidden md:inline">completed</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 md:gap-3 mb-4">
        {sections.map((section, idx) => {
          const isActive = section.name === question.category;
          const c = sectionColors[section.name];
          return (
            <div
              key={section.id}
              className={cn(
                "flex items-center justify-center md:justify-start gap-2.5 px-2 md:px-4 py-2.5 md:py-3 rounded-[12px] md:rounded-[14px] border transition-all",
                isActive
                  ? cn("bg-white", c.border)
                  : "bg-white border-[#E8ECF0] opacity-40",
              )}
            >
              <div
                className={cn(
                  "w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-[12px] md:text-[13px] font-semibold shrink-0 text-white",
                  isActive ? c.dot : "bg-slate-300",
                )}
              >
                {idx + 1}
              </div>
              <span
                className={cn(
                  "text-[12px] md:text-[13px] font-semibold font-poppins truncate hidden md:inline",
                  isActive ? c.text : "text-slate-400",
                )}
              >
                {section.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className="w-full h-[2px] md:h-[3px] bg-[#E8ECF0] rounded-full mb-4 md:mb-5 overflow-hidden">
        <div
          className={cn("h-full transition-all duration-500", colors.dot)}
          style={{
            width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
          }}
        />
      </div>

      <div
        className={cn(
          "bg-white rounded-[14px] border border-[#E8ECF0] p-3.5 md:p-4 mb-3 flex items-center justify-between border-t-4",
          colors.border,
        )}
      >
        <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
          <div
            className={cn(
              "w-9 h-9 md:w-10 md:h-10 rounded-[10px] md:rounded-[12px] flex items-center justify-center shrink-0",
              colors.bg,
              colors.text,
            )}
          >
            {sectionIcons[question.category]}
          </div>
          <div className="overflow-hidden">
            <h3 className="text-[14px] font-semibold text-slate-900 font-poppins leading-tight truncate">
              {question.category}
            </h3>
            <p className="text-[11px] md:text-[12px] text-slate-400 font-medium font-poppins mt-0.5 truncate md:whitespace-normal">
              {activeSection?.description}
            </p>
          </div>
        </div>
        <span
          className={cn(
            "text-[11px] font-semibold font-poppins px-2 py-0.5 md:px-3 md:py-1 rounded-full shrink-0 ml-2",
            colors.pill,
          )}
        >
          {activeSection?.tasks} tasks
        </span>
      </div>

      <div className="bg-white rounded-[14px] border border-[#E8ECF0] overflow-hidden">
        <div className="bg-slate-50/50 px-5 py-2.5 border-b border-[#E8ECF0] flex items-center gap-3">
          <div
            className={cn(
              "px-1.5 py-0.5 rounded-lg text-[10px] font-semibold text-white",
              colors.dot,
            )}
          >
            {currentQuestion + 1}
          </div>
          <span className="text-[12px] font-semibold font-poppins text-[#94A3B8]">
            {question.type}
          </span>
        </div>

        <div className="px-4 py-5 md:px-8 md:py-6 flex flex-col">
          <h2 className="text-[16px] md:text-[17px] font-semibold text-[#1E293B] mb-4 md:mb-5 leading-relaxed">
            {question.question}
          </h2>

          <div className="space-y-2 mb-2">
            {question.options.map((option) => {
              const isSelected = answers[currentQuestion] === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={cn(
                    "w-full p-3 md:p-3.5 rounded-[12px] md:rounded-[14px] text-left border-2 transition-all flex items-center gap-3 md:gap-4 cursor-pointer group",
                    isSelected
                      ? cn("bg-white", colors.border)
                      : "border-[#F8FAFC] bg-white hover:border-[#F1F5F9]",
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 md:w-9 md:h-9 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 text-[12px] md:text-[13px] font-semibold transition-colors",
                      isSelected
                        ? cn("text-white", colors.dot)
                        : "bg-[#F8FAFC] text-slate-400 group-hover:bg-[#F1F5F9]",
                    )}
                  >
                    {option.id}
                  </div>
                  <span
                    className={cn(
                      "text-[13px] md:text-[14px] font-poppins",
                      isSelected
                        ? "text-slate-900 font-semibold"
                        : "text-slate-600 font-medium",
                    )}
                  >
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:justify-between pt-5 md:pt-4 mt-5 md:mt-4 border-t border-[#E8ECF0]">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={cn(
                "w-full md:w-auto flex items-center justify-center md:justify-start gap-2 py-2 md:py-3 transition-colors cursor-pointer group",
                currentQuestion === 0
                  ? "opacity-0 pointer-events-none"
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-[14px] font-semibold font-poppins">Previous Question</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className="w-full md:w-auto md:min-w-[180px] bg-[#066EFF] text-white px-8 md:px-10 py-3.5 rounded-xl font-semibold text-[15px] font-poppins flex items-center justify-center gap-2 hover:bg-[#0052cc] transition-all active:scale-[0.98] group cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>
                {currentQuestion === quizQuestions.length - 1
                  ? "Finish Assessment"
                  : "Next Question"}
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizView;
