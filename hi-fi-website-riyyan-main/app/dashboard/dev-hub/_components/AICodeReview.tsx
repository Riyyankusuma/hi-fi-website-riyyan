"use client";

import React, { useState } from "react";
import { FileCode, RotateCcw, Send, Code2, Terminal } from "lucide-react";

export const AICodeReview = () => {
  const [code, setCode] =
    useState(`// Paste your code here or provide a GitHub repository URL

const express = require('express');
const app = express();

app.get('/users', async (req, res) => {
  const query = \`SELECT * FROM users WHERE name = '\${req.query.name}'\`;
  const users = await db.query(query);
  res.json(users);
});`);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 pb-10">
      <div
        className="bg-white rounded-[24px] flex flex-col overflow-hidden transition-all hover:shadow-xl hover:shadow-slate-200/20"
        style={{ border: "1.2px solid #F1F5F9" }}
      >
        <div className="px-5 md:px-8 py-4 md:py-5 bg-slate-50 border-b border-[#F1F5F9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <FileCode className="w-5 h-5 text-[#066EFF]" />
            <h3 className="text-[16px] md:text-[17px] font-semibold text-slate-800 font-poppins">
              Your Code
            </h3>
          </div>
          <button className="flex items-center gap-2 text-slate-400 hover:text-slate-600 text-[13px] md:text-[14px] font-medium transition-colors cursor-pointer">
            <Code2 className="w-4 h-4" />
            <span>Import from GitHub</span>
          </button>
        </div>

        <div className="p-0 bg-white">
          <div className="bg-[#1E293B] p-4 md:p-8 min-h-[360px] md:min-h-[460px] relative">
            <textarea
              className="w-full h-[300px] md:h-[400px] bg-transparent text-slate-300 font-mono text-[13px] md:text-[14px] resize-none outline-none leading-relaxed focus:ring-0 border-none scrollbar-hide"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              style={{ minHeight: "300px" }}
            />
          </div>
        </div>

        <div className="p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <Terminal className="w-4 h-4" />
            <span className="text-[13px] md:text-[14px] font-medium font-poppins">
              JavaScript/Node.js detected
            </span>
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#066EFF] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl md:rounded-[18px] text-[14px] md:text-[15px] font-semibold shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 active:scale-95 group cursor-pointer">
            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Review My Code</span>
          </button>
        </div>
      </div>

      <div
        className="bg-white rounded-[24px] flex flex-col overflow-hidden transition-all hover:shadow-xl hover:shadow-slate-200/20"
        style={{ border: "1.2px solid #F1F5F9" }}
      >
        <div className="px-5 md:px-8 py-4 md:py-5 bg-slate-50 border-b border-[#F1F5F9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RotateCcw className="w-5 h-5 text-[#066EFF]" />
            <h3 className="text-[16px] md:text-[17px] font-semibold text-slate-800 font-poppins">
              Review Results
            </h3>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-10 text-center space-y-4 min-h-[360px] md:min-h-[460px]">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-[#94A3B8] mb-2">
            <Code2 className="w-12 h-12 md:w-15 md:h-15 text-[#E8ECF0]" />
          </div>
          <div className="space-y-2">
            <h4 className="text-[16px] md:text-[18px] font-semibold text-[#94A3B8] font-poppins px-4">
              Paste your code and click &quot;Review My Code&quot;
            </h4>
            <p className="text-[#C8CDD3] text-[13px] md:text-[15px] leading-relaxed max-w-sm font-normal px-4">
              Get instant AI-powered feedback on quality, security, and best
              practices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
