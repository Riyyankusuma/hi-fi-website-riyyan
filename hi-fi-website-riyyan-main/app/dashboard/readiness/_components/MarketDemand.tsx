"use client";

import { TrendingUp } from "lucide-react";

interface MarketDemandItem {
  rank: number;
  skill: string;
  jobs: string;
  trend: number;
  barWidth: number;
}

const marketDemands: MarketDemandItem[] = [
  {
    rank: 1,
    skill: "React/Next.js",
    jobs: "12.4k jobs",
    trend: 92,
    barWidth: 92,
  },
  { rank: 2, skill: "TypeScript", jobs: "11.2k jobs", trend: 88, barWidth: 85 },
  {
    rank: 3,
    skill: "Python/AI/ML",
    jobs: "9.8k jobs",
    trend: 85,
    barWidth: 78,
  },
  { rank: 4, skill: "Cloud/AWS", jobs: "8.5k jobs", trend: 82, barWidth: 72 },
  { rank: 5, skill: "Docker/K8s", jobs: "7.2k jobs", trend: 78, barWidth: 65 },
];

const RankBadge = ({ rank }: { rank: number }) => (
  <div className="w-12 text-[18px] font-semibold text-slate-400 font-poppins shrink-0">
    #{rank}
  </div>
);

const DemandBar = ({ width }: { width: number }) => (
  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-50/50">
    <div
      className="h-full rounded-full transition-all duration-1000 ease-out"
      style={{
        width: `${width}%`,
        background: "linear-gradient(90deg, #066EFF 0%, #10B981 100%)",
      }}
    />
  </div>
);

const TrendIndicator = ({ trend }: { trend: number }) => (
  <div className="flex items-center gap-1">
    <TrendingUp className="w-3.5 h-3.5 text-[#10B981]" />
    <span className="text-[15px] font-medium text-[#10B981]">{trend}%</span>
  </div>
);

const MarketDemandRow = ({ item }: { item: MarketDemandItem }) => (
  <div className="p-4 md:p-8 rounded-[16px] bg-slate-50/50 hover:bg-slate-100/60 transition-all duration-300">
    <div className="flex items-center gap-1">
      <RankBadge rank={item.rank} />

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[16px] md:text-[18px] font-medium text-slate-900 font-poppins leading-none truncate">
            {item.skill}
          </h3>
          <div className="flex items-center gap-4">
            <span className="text-[13px] md:text-[14px] text-slate-400 font-normal whitespace-nowrap">
              {item.jobs}
            </span>
            <TrendIndicator trend={item.trend} />
          </div>
        </div>

        <DemandBar width={item.barWidth} />
      </div>
    </div>
  </div>
);

export const MarketDemand = () => {
  return (
    <div
      className="bg-white p-4 md:p-8 lg:p-10 rounded-[16px] border border-[#E8ECF0]"
    >
      <div className="mb-4">
        <h2 className="text-[18px] md:text-[20px] font-semibold text-slate-900 font-poppins">
          Market Demand Insights
        </h2>
      </div>

      <div className="space-y-3">
        {marketDemands.map((item) => (
          <MarketDemandRow key={item.rank} item={item} />
        ))}
      </div>
    </div>
  );
};
