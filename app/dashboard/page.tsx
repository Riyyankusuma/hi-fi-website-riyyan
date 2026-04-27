"use client";

import { ReadinessScoreCard } from "./_components/ReadinessScoreCard";
import { GrowthProgressCard } from "./_components/GrowthProgressCard";
import { QuickActionsCard } from "./_components/QuickActionsCard";
import { SkillsNeedAttentionCard } from "./_components/SkillsNeedAttentionCard";
import { RecentAchievementsCard } from "./_components/RecentAchievementsCard";
import { UpcomingTasks } from "./_components/UpcomingTasks";
import { WelcomeSection } from "./_components/WelcomeSection";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <div className="p-4 md:p-8 lg:p-10 space-y-4 md:space-y-6">
        <WelcomeSection name="Alex" streak={3} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          <div className="lg:col-span-5 min-h-[300px] md:min-h-[340px]">
            <ReadinessScoreCard score={62} trend="+8%" />
          </div>

          <div className="lg:col-span-7 min-h-[300px] md:min-h-[340px]">
            <GrowthProgressCard />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 pb-4">
          <SkillsNeedAttentionCard />
          <RecentAchievementsCard />
          <UpcomingTasks />
        </div>
      </div>
    </div>
  );
}
