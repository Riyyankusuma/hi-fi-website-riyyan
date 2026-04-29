"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  ShieldCheck,
  Code2,
  Briefcase,
  User,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

const menuItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  {
    icon: ShieldCheck,
    label: "Readiness Center",
    href: "/dashboard/readiness",
  },
  { icon: Code2, label: "Development Hub", href: "/dashboard/dev-hub" },
  {
    icon: Briefcase,
    label: "Career Simulation",
    href: "/dashboard/simulation",
  },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export const DashboardSidebar = ({
  className,
  isMobile,
  isCollapsed,
}: {
  className?: string;
  isMobile?: boolean;
  isCollapsed?: boolean;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <aside
      className={cn(
        "bg-white flex flex-col h-full shrink-0 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[100px]" : "w-[280px]",
        className
      )}
      style={!isMobile ? { borderRight: "0.8px solid #E8ECF0" } : undefined}
    >
      <div className={cn(
        "flex transition-all duration-300", 
        isCollapsed ? "flex-col p-8 pb-16 items-center" : "flex-row px-6 pt-10 pb-10 items-center justify-between"
      )}>
        <Link href="/dashboard" className={cn("flex items-center", isCollapsed ? "justify-center w-full" : "justify-start")}>
          <Image
            src="/assets/images/logo.png"
            alt="Wirapath Logo"
            width={isCollapsed ? 32 : 140}
            height={isCollapsed ? 32 : 36}
            className="object-contain"
          />
        </Link>
        
        {isMobile && (
          <SheetClose asChild>
            <button className="lg:hidden p-2.5 bg-slate-50 border border-slate-100 text-slate-500 rounded-xl transition-all active:scale-90 hover:bg-slate-100">
              <ChevronLeft className="w-5 h-5" />
            </button>
          </SheetClose>
        )}
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const content = (
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-4 rounded-[16px] transition-all duration-200 group",
                isCollapsed ? "px-0 justify-center h-12 w-12 mx-auto" : "px-4 py-3.5",
                isActive
                  ? "bg-[#066EFF] text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:bg-slate-50 hover:text-slate-600",
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5 transition-all duration-300",
                  isActive
                    ? "text-white"
                    : "text-slate-400 group-hover:text-slate-600",
                  isCollapsed && "scale-110"
                )}
              />
              {!isCollapsed && <span className="text-[15px] font-semibold">{item.label}</span>}
            </Link>
          );

          return isMobile ? (
            <SheetClose asChild key={item.label}>
              {content}
            </SheetClose>
          ) : (
            <React.Fragment key={item.label}>{content}</React.Fragment>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-50">
        {isMobile ? (
          <SheetClose asChild>
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 px-4 py-3.5 w-full rounded-[16px] text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200 group cursor-pointer"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-[15px] font-semibold">Log Out</span>
            </button>
          </SheetClose>
        ) : (
          <button
            onClick={handleLogout}
            className={cn(
              "flex items-center gap-4 rounded-[16px] text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200 group cursor-pointer",
              isCollapsed ? "px-0 justify-center h-12 w-12 mx-auto" : "px-4 py-3.5",
            )}
          >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span className="text-[15px] font-semibold">Log Out</span>}
          </button>
        )}
      </div>
    </aside>
  );
};
