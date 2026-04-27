"use client";

import { useState } from "react";
import { DashboardSidebar } from "./_components/DashboardSidebar";
import { TopHeader } from "./_components/TopHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="flex h-screen bg-[#F0F2F5] font-poppins overflow-hidden">
      <DashboardSidebar 
        className="hidden lg:flex" 
        isCollapsed={isSidebarCollapsed} 
      />

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <TopHeader 
          name="Alex Rahman" 
          role="IT Graduate" 
          initials="AR" 
          isSidebarCollapsed={isSidebarCollapsed}
          onToggleSidebar={toggleSidebar}
        />
        <div className="flex-1 overflow-y-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
