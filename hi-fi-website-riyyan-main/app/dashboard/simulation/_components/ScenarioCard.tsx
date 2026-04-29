"use client";

import React from "react";

export const ScenarioCard = () => {
  return (
    <div
      className="bg-white rounded-[16px] overflow-hidden flex flex-col h-full"
      style={{ border: "0.8px solid #E8ECF0" }}
    >
      <div className="px-5 py-4 border-b-[0.8px] border-[#E8ECF0] bg-slate-50/10">
        <h3 className="text-[17px] font-semibold text-slate-900 font-poppins">
          Scenario
        </h3>
      </div>
      <div className="p-5 space-y-5">
        <div className="p-4 bg-slate-50 rounded-[12px] space-y-1 border-[0.8px] border-slate-100">
          <p className="text-[13px] text-slate-400 font-medium font-poppins">
            Position
          </p>
          <p className="text-[15px] text-slate-900 font-semibold font-poppins">
            Jr. Software Engineer
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-[12px] space-y-1 border-[0.8px] border-slate-100">
          <p className="text-[13px] text-slate-400 font-medium font-poppins">
            Initial Offer
          </p>
          <p className="text-[15px] text-slate-900 font-semibold font-poppins">
            Rp 8,000,000/mo
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-[12px] space-y-1 border-[0.8px] border-slate-100">
          <p className="text-[13px] text-slate-400 font-medium font-poppins">
            Market Average
          </p>
          <p className="text-[15px] text-emerald-500 font-semibold font-poppins">
            Rp 9.5M - 12M/mo
          </p>
        </div>
      </div>
    </div>
  );
};
