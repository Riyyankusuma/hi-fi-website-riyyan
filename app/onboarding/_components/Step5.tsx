"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  GraduationCapIcon,
} from "lucide-react";

export default function Step5({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full animate-in fade-in duration-500 max-w-[720px] mx-auto py-4 px-4 sm:px-0">
      <div className="w-full mb-8 md:mb-10 text-center md:text-left">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#0D3E9B] mb-2 tracking-tight leading-tight">
          Upload Academic Transcript
        </h2>
        <p className="text-[14px] md:text-[15px] font-medium text-slate-400 leading-relaxed opacity-80">
          Your transcript helps us map your academic competencies to industry
          requirements.
        </p>
      </div>

      <div className="w-full min-h-[200px] md:h-[250px] rounded-[24px] md:rounded-[32px] border-[1.6px] border-dashed border-[#066EFF4D] bg-[#F0F4FF80] flex flex-col items-center justify-center p-6 gap-4 cursor-pointer hover:bg-[#F0F4FF] transition-all group">
        <div className="flex items-center justify-center group-hover:scale-110 transition-transform">
          <GraduationCapIcon className="w-10 h-10 md:w-12 md:h-12 text-[#066EFF]" />
        </div>
        <div className="text-center">
          <p className="text-[15px] md:text-[18px] font-medium text-[#475569] mb-1 md:mb-2 leading-tight">
            Drop your transcript here or click to browse
          </p>
          <p className="text-[12px] md:text-[13px] font-medium text-slate-400">
            Supports PDF, JPG, PNG (Max 10MB)
          </p>
        </div>
      </div>

      <div className="w-full text-center md:text-left mt-8">
        <button 
          onClick={onNext}
          className="text-[14px] font-semibold text-slate-400 hover:text-[#066EFF] transition-colors cursor-pointer"
        >
          I&apos;ll do this later →
        </button>
      </div>

      <div className="flex items-center gap-3 mt-10 md:mt-12 w-full">
        <button
          onClick={onBack}
          className="h-14 w-14 flex items-center justify-center rounded-[20px] bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-gray-900 transition-all active:scale-95 sm:w-auto sm:px-6 sm:gap-2 sm:bg-transparent sm:hover:bg-transparent sm:h-auto"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          <span className="hidden sm:inline text-[15px] font-semibold">Back</span>
        </button>
        <div className="hidden sm:block grow" />
        <Button
          onClick={onNext}
          className="grow sm:grow-0 h-14 px-12 bg-linear-to-r from-[#066EFF] to-[#0556cc] hover:from-[#0556cc] hover:to-[#044bb3] rounded-[20px] text-[15px] font-bold text-white shadow-lg shadow-blue-500/25 gap-3 group transition-all active:scale-[0.98]"
        >
          Continue
          <ChevronRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
