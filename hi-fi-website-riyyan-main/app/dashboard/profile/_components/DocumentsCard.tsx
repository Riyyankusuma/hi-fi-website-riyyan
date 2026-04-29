"use client";

import React from "react";
import { FileText, Files, Download } from "lucide-react";

export const DocumentsCard = () => {
  return (
    <div
      className="bg-white rounded-[24px] overflow-hidden flex flex-col transition-all hover:shadow-xl hover:shadow-slate-200/20"
      style={{ border: "1.2px solid #F1F5F9" }}
    >
      <div className="px-6 py-4 border-b border-[#F1F5F9] bg-slate-50/50">
        <h3 className="text-[17px] md:text-[18px] font-semibold text-slate-900 font-poppins">
          Documents
        </h3>
      </div>
      <div className="p-5 md:p-6 space-y-4">
        {[
          { name: "CV", filename: "alex_rahman_cv.pdf", icon: FileText, color: "text-blue-500" },
          { name: "Transcript", filename: "academic_transcript.pdf", icon: Files, color: "text-amber-500" },
        ].map((doc) => (
          <div key={doc.name} className="p-4 bg-slate-50/50 rounded-[16px] flex items-center justify-between border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-[12px] bg-white flex items-center justify-center border border-slate-100 shadow-sm shadow-slate-200/50">
                <doc.icon className={`w-5 h-5 ${doc.color}`} />
              </div>
              <div>
                <p className="text-[14px] md:text-[15px] font-semibold text-slate-900 font-poppins">
                  {doc.name}
                </p>
                <p className="text-[12px] md:text-[13px] text-slate-400 font-medium font-poppins">
                  {doc.filename}
                </p>
              </div>
            </div>
            <Download className="w-4 h-4 text-slate-400 group-hover:text-[#066EFF] transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};
