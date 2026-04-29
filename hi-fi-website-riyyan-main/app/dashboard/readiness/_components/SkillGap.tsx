"use client";

import { cn } from "@/lib/utils";

interface SkillGapItem {
  skill: string;
  current: number;
  required: number;
  demand: string;
  priority: "Critical" | "High" | "Medium";
}

const skillGaps: SkillGapItem[] = [
  {
    skill: "System Design",
    current: 28,
    required: 70,
    demand: "High",
    priority: "Critical",
  },
  {
    skill: "Testing & QA",
    current: 35,
    required: 65,
    demand: "High",
    priority: "Critical",
  },
  {
    skill: "Docker/DevOps",
    current: 30,
    required: 60,
    demand: "Very High",
    priority: "High",
  },
  {
    skill: "TypeScript",
    current: 45,
    required: 75,
    demand: "Very High",
    priority: "High",
  },
  {
    skill: "Database Design",
    current: 42,
    required: 70,
    demand: "Medium",
    priority: "Medium",
  },
];

const PriorityBadge = ({ priority }: { priority: string }) => {
  const configs = {
    Critical: "bg-red-50 text-red-500",
    High: "bg-orange-50 text-orange-500",
    Medium: "bg-blue-50 text-blue-500",
  };
  return (
    <span
      className={cn(
        "inline-block px-4 py-1.5 rounded-full text-[12px] font-medium min-w-[84px] text-center",
        configs[priority as keyof typeof configs],
      )}
    >
      {priority}
    </span>
  );
};

const GapIndicator = ({
  current,
  required,
}: {
  current: number;
  required: number;
}) => {
  const gapWidth = Math.max(10, Math.min(40, (required - current) / 1.5));

  return (
    <div className="inline-flex h-2.5 w-14 bg-slate-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#EF4444] rounded-full transition-all duration-1000"
        style={{ width: `${gapWidth}%` }}
      />
    </div>
  );
};

const SkillGapRow = ({ item }: { item: SkillGapItem }) => (
  <tr className="group hover:bg-slate-50/80 transition-all duration-300">
    <td className="py-4 px-6 border-b-[0.8px] border-[#E8ECF0]">
      <span className="text-[14px] md:text-[15px] font-medium text-slate-900 font-poppins whitespace-nowrap">
        {item.skill}
      </span>
    </td>
    <td className="py-4 px-6 border-b-[0.8px] border-[#E8ECF0]">
      <span className="text-[14px] md:text-[15px] font-medium text-[#EF4444] font-poppins">
        {item.current}%
      </span>
    </td>
    <td className="py-4 px-6 border-b-[0.8px] border-[#E8ECF0]">
      <span className="text-[14px] md:text-[15px] font-medium text-[#10B981] font-poppins">
        {item.required}%
      </span>
    </td>
    <td className="py-4 px-6 border-b-[0.8px] border-[#E8ECF0]">
      <GapIndicator current={item.current} required={item.required} />
    </td>
    <td className="py-4 px-6 border-b-[0.8px] border-[#E8ECF0]">
      <span className="text-[13px] md:text-[14px] text-slate-400 font-normal whitespace-nowrap">
        {item.demand}
      </span>
    </td>
    <td className="py-4 px-6 border-b-[0.8px] border-[#E8ECF0]">
      <PriorityBadge priority={item.priority} />
    </td>
  </tr>
);

export const SkillGap = () => {
  return (
    <div
      className="bg-white p-4 md:p-8 lg:p-10 rounded-[16px] border border-[#E8ECF0]"
    >
      <div className="mb-4">
        <h2 className="text-[18px] md:text-[20px] font-semibold text-slate-900 font-poppins">
          Skill Gap Breakdown
        </h2>
      </div>

      <div className="overflow-x-auto rounded-[16px] border-[0.8px] border-[#E8ECF0]">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="py-4 px-6 text-[13px] md:text-[14px] font-medium text-slate-400 border-b-[0.8px] border-[#E8ECF0]">
                Skill
              </th>
              <th className="py-4 px-6 text-[13px] md:text-[14px] font-medium text-slate-400 border-b-[0.8px] border-[#E8ECF0]">
                Current
              </th>
              <th className="py-4 px-6 text-[13px] md:text-[14px] font-medium text-slate-400 border-b-[0.8px] border-[#E8ECF0]">
                Required
              </th>
              <th className="py-4 px-6 text-[13px] md:text-[14px] font-medium text-slate-400 border-b-[0.8px] border-[#E8ECF0]">
                Gap
              </th>
              <th className="py-4 px-6 text-[13px] md:text-[14px] font-medium text-slate-400 border-b-[0.8px] border-[#E8ECF0]">
                Demand
              </th>
              <th className="py-4 px-6 text-[13px] md:text-[14px] font-medium text-slate-400 border-b-[0.8px] border-[#E8ECF0]">
                Priority
              </th>
            </tr>
          </thead>
          <tbody className="divide-[#E8ECF0]">
            {skillGaps.map((item) => (
              <SkillGapRow key={item.skill} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
