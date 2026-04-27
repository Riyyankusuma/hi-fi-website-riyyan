"use client";

import React from "react";
import { TrendingUp, ArrowRight } from "lucide-react";

interface ReadinessScoreCardProps {
  score: number;
  trend: string;
}

export const ReadinessScoreCard = ({ score, trend }: ReadinessScoreCardProps) => {
  return (
    <div
      className="relative overflow-hidden bg-linear-to-br from-[#066EFF] to-[#0142A0] p-6 md:p-8 rounded-[32px] h-full flex flex-col justify-between transition-all duration-500 group hover:shadow-2xl hover:shadow-blue-600/30 text-white"
    >
      {/* Decorative background blobs/circles */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/15 transition-colors pointer-events-none" />
      <div className="absolute top-1/4 -right-4 w-24 h-24 bg-blue-300/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[10%] w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        <p className="text-[14px] md:text-[16px] font-medium text-blue-50 tracking-wide">
          Overall Readiness
        </p>

        <div className="flex items-baseline gap-2.5">
          <span className="text-[58px] md:text-[68px] font-bold leading-none tracking-tight">
            {score}
          </span>
          <span className="text-[22px] md:text-[26px] font-medium text-white/50">
            / 100
          </span>
        </div>

        <div className="space-y-4">
          <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-white rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(255,255,255,0.6)]"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 text-white/80">
          <TrendingUp className="w-4 h-4 animate-pulse" />
          <span className="text-[13px] font-medium tracking-tight">
            {trend} from last week
          </span>
        </div>
        
        <button className="flex items-center gap-1.5 text-[13px] font-semibold text-white group/btn">
          <span className="group-hover/btn:underline decoration-white/30 underline-offset-4">View details</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
