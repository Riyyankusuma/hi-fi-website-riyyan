"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  Loader2Icon, 
  CheckCircle2Icon,
  ExternalLinkIcon,
  GitBranchIcon,
  StarIcon,
  UsersIcon
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { toast } from "sonner";

type Step6Props = {
  onFinish: () => void;
  onBack: () => void;
};

type ConnectionStatus = "idle" | "connecting" | "connected";

export default function Step6({ onFinish, onBack }: Step6Props) {
  const [status, setStatus] = useState<ConnectionStatus>("idle");
  const [userData, setUserData] = useState<{
    username: string;
    name: string;
    avatar: string;
    repos: number;
    stars: number;
    followers: number;
  } | null>(null);

  const handleConnect = () => {
    setStatus("connecting");
    
    // Simulate GitHub OAuth process
    setTimeout(() => {
      setUserData({
        username: "Meisa354",
        name: "Meisa",
        avatar: "https://github.com/Meisa354.png",
        repos: 12,
        stars: 45,
        followers: 120,
      });
      setStatus("connected");
      toast.success("GitHub account connected successfully!");
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full animate-in fade-in duration-500 max-w-[720px] mx-auto py-4 px-4 sm:px-0">
      {status !== "connected" ? (
        <>
          <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[88px] lg:h-[88px] bg-[#1A1A1D] rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-black/10">
            <GithubIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>

          <div className="text-center mb-8 md:mb-10 max-w-[620px]">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#0D3E9B] mb-3 md:mb-4 tracking-tight leading-tight">
              Connect Your GitHub
            </h2>
            <p className="text-[14px] md:text-[15px] text-slate-400 leading-relaxed md:leading-[1.8] opacity-80 px-2 md:px-4">
              Let&apos;s see what you&apos;ve built. Connecting GitHub helps us
              analyze your repositories, coding patterns, and suggest personalized
              development projects.
            </p>
          </div>

          <div className="w-full max-w-[400px] mb-4 md:mb-6">
            <Button 
              onClick={handleConnect}
              disabled={status === "connecting"}
              className="w-full h-14 md:h-16 bg-[#1A1A1D] hover:bg-[#2A2A2D] rounded-[16px] md:rounded-[20px] text-[15px] md:text-[16px] font-bold text-white shadow-xl shadow-black/10 transition-all active:scale-[0.98] flex items-center justify-center gap-3 md:gap-4 disabled:opacity-70"
            >
              {status === "connecting" ? (
                <>
                  <Loader2Icon className="w-5 h-5 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <GithubIcon className="w-5 h-5 md:w-6 md:h-6" />
                  Connect GitHub Account
                </>
              )}
            </Button>
          </div>

          <p className="text-[12px] md:text-[13px] text-[#94A3B8] mb-10 md:mb-16 opacity-70 text-center">
            We only read public repository data. Your code stays yours.
          </p>
        </>
      ) : (
        <div className="w-full animate-in zoom-in-95 duration-500 flex flex-col items-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-blue-50 overflow-hidden shadow-xl bg-slate-100 flex items-center justify-center">
              {userData?.avatar ? (
                <img 
                  src={userData.avatar} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${userData.name}&background=0D3E9B&color=fff`;
                  }}
                />
              ) : (
                <GithubIcon className="w-12 h-12 text-slate-300" />
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1.5 rounded-full border-4 border-white shadow-lg">
              <CheckCircle2Icon className="w-5 h-5" />
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-[24px] md:text-[28px] font-bold text-[#0D3E9B] mb-1">
              Connected as {userData?.name}
            </h2>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-[14px]">
              <GithubIcon className="w-4 h-4" />
              <span>@{userData?.username}</span>
              <ExternalLinkIcon className="w-3 h-3" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full max-w-[500px] mb-12">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center gap-1">
              <GitBranchIcon className="w-5 h-5 text-blue-600 mb-1" />
              <span className="text-[18px] font-bold text-[#0D3E9B]">{userData?.repos}</span>
              <span className="text-[12px] font-medium text-slate-400">Repositories</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center gap-1">
              <StarIcon className="w-5 h-5 text-yellow-500 mb-1" />
              <span className="text-[18px] font-bold text-[#0D3E9B]">{userData?.stars}</span>
              <span className="text-[12px] font-medium text-slate-400">Stars</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center gap-1">
              <UsersIcon className="w-5 h-5 text-purple-600 mb-1" />
              <span className="text-[18px] font-bold text-[#0D3E9B]">{userData?.followers}</span>
              <span className="text-[12px] font-medium text-slate-400">Followers</span>
            </div>
          </div>

          <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50 text-center mb-16 max-w-[450px]">
            <p className="text-[13px] text-[#066EFF] font-medium leading-relaxed">
              Analysis complete! We&apos;ve mapped your top languages and coding patterns to our career advisor engine.
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 mt-auto w-full">
        <button 
          onClick={onBack}
          className="h-14 w-14 flex items-center justify-center rounded-[20px] bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-gray-900 transition-all active:scale-95 sm:w-auto sm:px-6 sm:gap-2 sm:bg-transparent sm:hover:bg-transparent sm:h-auto"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          <span className="hidden sm:inline text-[15px] font-semibold">Back</span>
        </button>
        <div className="hidden sm:block grow" />
        <Button 
          onClick={onFinish}
          disabled={status === "connecting"}
          className="grow sm:grow-0 h-14 px-12 bg-linear-to-r from-[#066EFF] to-[#0556cc] hover:from-[#0556cc] hover:to-[#044bb3] rounded-[20px] text-[15px] font-bold text-white shadow-lg shadow-blue-500/25 gap-3 group transition-all active:scale-[0.98] disabled:opacity-50"
        >
          {status === "connected" ? "Finish Setup" : "Skip for now"}
          <ChevronRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}

