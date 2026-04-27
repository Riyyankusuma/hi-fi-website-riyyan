"use client";

import React from "react";
import { Mail, MapPin, GraduationCap } from "lucide-react";

export const ProfileBanner = () => {
  return (
    <div
      className="relative w-full rounded-[24px] overflow-hidden p-6 md:p-10 text-white flex flex-col lg:flex-row justify-between items-center md:items-start lg:items-center gap-8 md:gap-10 shadow-lg shadow-blue-500/10"
      style={{
        background:
          "linear-gradient(90deg, #066EFF 0%, #076AF8 7.14%, #0867F0 14.29%, #0963E9 21.43%, #0A60E2 28.57%, #0B5CDA 35.71%, #0C59D3 42.86%, #0C55CC 50%, #0C52C5 57.14%, #0D4FBE 64.29%, #0D4BB7 71.43%, #0D48B0 78.57%, #0D45A9 85.71%, #0D41A2 92.86%, #0D3E9B 100%)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 md:gap-8 z-10 w-full lg:w-auto">
        <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-[32px] bg-white/20 backdrop-blur-md flex items-center justify-center text-[32px] md:text-[38px] font-bold border border-white/30 shadow-2xl shadow-black/10 shrink-0">
          AR
        </div>
        <div className="space-y-4 md:space-y-5 text-center md:text-left">
          <div className="space-y-1.5">
            <h2 className="text-[26px] md:text-[32px] font-bold font-poppins tracking-tight leading-tight">
              Alex Rahman
            </h2>
            <p className="text-white/80 text-[14px] md:text-[15px] font-medium font-poppins px-4 py-1 rounded-full bg-white/10 w-fit mx-auto md:mx-0 border border-white/10 backdrop-blur-sm">
              IT Graduate
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5 text-white/90 text-[13px] md:text-[14px] font-poppins">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              <span className="line-clamp-1">alex.rahman@email.com</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              <span>Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
              <GraduationCap className="w-4 h-4" />
              <span>Universitas Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-5 z-10 justify-center w-full lg:w-auto">
        {[
          { label: "Readiness", value: "62%" },
          { label: "Skills", value: "12" },
          { label: "Badges", value: "6" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] px-6 md:px-8 py-4 md:py-5 flex flex-col items-center flex-1 min-w-[100px] md:min-h-[100px] transition-all hover:bg-white/15 cursor-default group">
            <span className="text-[20px] md:text-[24px] font-bold font-poppins group-hover:scale-110 transition-transform">
              {stat.value}
            </span>
            <span className="text-[12px] md:text-[13px] text-white/60 font-medium font-poppins">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50 md:opacity-100" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-white/5 rounded-full blur-2xl transform -translate-y-1/2" />
        <div className="absolute -bottom-24 -right-12 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};
