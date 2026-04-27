"use client";

import React from "react";

const skills = [
  { name: "JavaScript", proficiency: 78, color: "bg-emerald-500" },
  { name: "React", proficiency: 65, color: "bg-amber-500" },
  { name: "Node.js", proficiency: 60, color: "bg-amber-500" },
  { name: "Git", proficiency: 82, color: "bg-emerald-500" },
  { name: "SQL", proficiency: 70, color: "bg-emerald-500" },
  { name: "REST API", proficiency: 72, color: "bg-emerald-500" },
  { name: "CSS/Tailwind", proficiency: 68, color: "bg-amber-500" },
  { name: "Python", proficiency: 52, color: "bg-amber-500" },
];

export const SkillDetails = () => {
  return (
    <div
      className="bg-white rounded-[24px] overflow-hidden flex flex-col h-full transition-all hover:shadow-xl hover:shadow-slate-200/20"
      style={{ border: "1.2px solid #F1F5F9" }}
    >
      <div className="px-5 md:px-8 py-3.5 md:py-4 border-b border-[#F1F5F9] bg-slate-50/50 shrink-0">
        <h3 className="text-[17px] md:text-[18px] font-semibold text-slate-900 font-poppins">
          Skill Details
        </h3>
      </div>
      <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-12 md:gap-y-8">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2.5 group">
            <div className="flex justify-between items-center px-0.5">
              <span className="text-[14px] md:text-[15px] font-semibold text-slate-700 font-poppins group-hover:text-[#066EFF] transition-colors">
                {skill.name}
              </span>
              <span className="text-[12px] md:text-[13px] font-bold text-slate-400 font-poppins tabular-nums">
                {skill.proficiency}%
              </span>
            </div>
            <div className="h-2.5 md:h-[10px] w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100 shadow-inner shadow-slate-200/10">
              <div
                className={`h-full ${skill.color} transition-all duration-1000 ease-out relative`}
                style={{ width: `${skill.proficiency}%` }}
              >
                <div className="absolute top-0 right-0 h-full w-[20px] bg-white/20 skew-x-12 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
