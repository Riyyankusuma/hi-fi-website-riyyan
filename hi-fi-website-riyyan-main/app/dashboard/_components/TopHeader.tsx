"use client";

import { useState } from "react";
import { Search, Bell, X, Menu } from "lucide-react";
import { DashboardSidebar } from "./DashboardSidebar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const TopHeader = ({
  name,
  role,
  initials,
  isSidebarCollapsed,
  onToggleSidebar,
}: {
  name: string;
  role: string;
  initials: string;
  isSidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header
      className="h-[72px] md:h-[88px] bg-white px-4 md:px-10 flex items-center justify-between shrink-0 z-40 sticky top-0"
      style={{ borderBottom: "0.8px solid #E8ECF0" }}
    >
      <div className="flex items-center gap-3 md:gap-5 flex-1">
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors active:scale-95">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 border-none w-[280px]" showCloseButton={false}>
            <div className="sr-only">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Access dashboard features and settings</SheetDescription>
              </SheetHeader>
            </div>
            <DashboardSidebar isMobile={true} />
          </SheetContent>
        </Sheet>
        
        <button 
          onClick={onToggleSidebar}
          className="hidden lg:flex p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-xl transition-all active:scale-95 cursor-pointer"
        >
          {isSidebarCollapsed ? (
            <Menu className="w-6 h-6" />
          ) : (
            <X className="w-6 h-6" />
          )}
        </button>

        <div className="relative w-full max-w-[400px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search features..."
            className="w-full bg-[#F5F7FA] rounded-xl md:rounded-2xl h-10 md:h-12 pl-10 md:pl-12 pr-10 md:pr-12 text-[13px] md:text-[14px] outline-none border border-transparent focus:border-blue-100 transition-all font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-1">
        <button className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-all active:scale-[0.98]">
          <Bell className="w-5 md:w-6 h-5 md:h-6" />
          <span className="absolute top-[8px] md:top-[10px] right-[8px] md:right-[10px] w-2 md:w-2.5 h-2 md:h-2.5 bg-[#F97316] rounded-full border-2 border-white"></span>
        </button>

        <div
          className="h-8 md:h-10 w-px mx-3 md:mx-6 hidden xs:block"
          style={{ backgroundColor: "#E8ECF0" }}
        />

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-linear-to-tr from-[#066EFF] to-[#0D3E9B] flex items-center justify-center text-white font-bold tracking-tighter text-[13px] md:text-[15px] active:scale-95 transition-transform cursor-pointer shadow-md shadow-blue-200">
            {initials}
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[14px] font-bold text-[#0D3E9B] leading-tight">
              {name}
            </span>
            <span className="text-[12px] font-medium text-slate-400">
              {role}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
