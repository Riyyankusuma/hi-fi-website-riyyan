"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSocialLoading, setIsSocialLoading] = useState<string | null>(null);
  const [showAccountSelector, setShowAccountSelector] = useState<string | null>(null);
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  const handleSocialAuth = (provider: string) => {
    setIsSocialLoading(provider);
    
    // Simulate opening social auth window
    setTimeout(() => {
      setIsSocialLoading(null);
      setShowAccountSelector(provider);
    }, 800);
  };

  const confirmAccount = () => {
    setShowAccountSelector(null);
    setIsSocialLoading("authenticating");
    
    // Final redirect simulation
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="w-full max-w-[420px] flex flex-col items-center lg:items-start font-poppins">
      <div className="mb-7 text-center lg:text-left">
        <h2 className="text-[28px] font-extrabold text-[#0D3E9B] mb-2">
          Sign In
        </h2>
        <p className="text-[14px] text-slate-400 leading-relaxed">
          Enter your credentials to access your account
        </p>
      </div>

      <form onSubmit={handleSignIn} className="w-full space-y-4">
        <div className="space-y-3">
          <Label htmlFor="email" className="text-[14px] font-semibold ml-1">
            Email or Username
          </Label>
          <Input
            id="email"
            className="h-[46px] bg-white rounded-[12px] px-5 text-[14px] font-medium placeholder:text-[#0A0A0A80] placeholder:font-normal focus-visible:ring-0 border border-[#E8ECF0] outline-none"
            placeholder="Enter your email or username"
          />
        </div>

        <div className="space-y-3 relative">
          <Label htmlFor="password" className="text-[14px] font-semibold ml-1">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              className="h-[46px] bg-white rounded-[12px] px-5 pr-12 text-[14px] font-medium placeholder:text-[#0A0A0A80] placeholder:font-normal focus-visible:ring-0 border border-[#E8ECF0] outline-none"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-2 p-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-400 transition-colors z-20 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <EyeOffIcon className="w-5 h-5 stroke-[1.5]" />
              ) : (
                <EyeIcon className="w-5 h-5 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between w-full text-[14px] font-semibold">
          <div className="flex items-center gap-3">
            <Checkbox
              id="remember"
              className="border-slate-200 rounded-[4px] data-[state=checked]:bg-blue-600"
            />
            <label htmlFor="remember" className="text-slate-400 font-medium cursor-pointer select-none">
              Remember me
            </label>
          </div>
          <Link href="#" className="text-[#066EFF] hover:underline">
            Forgot Password?
          </Link>
        </div>

        <Button 
          type="submit"
          className="w-full h-[48px] bg-[#066EFF] hover:bg-[#0556cc] text-white font-bold rounded-[16px] shadow-xl shadow-blue-500/30 transition-all text-[16px] cursor-pointer"
        >
          Sign In
        </Button>
      </form>

      <div className="w-full flex items-center gap-4 my-9">
        <div className="h-px grow bg-[#E8ECF0]" />
        <span className="text-[12px] text-[#94A3B8] tracking-widest px-2">
          Or continue with
        </span>
        <div className="h-px grow bg-[#E8ECF0]" />
      </div>

      <div className="w-full grid grid-cols-2 gap-4">
        <Button
          variant="ghost"
          disabled={!!isSocialLoading}
          className="h-[46px] rounded-[16px] bg-white font-medium gap-3 hover:bg-slate-50 border border-[#E8ECF0] cursor-pointer"
          onClick={() => handleSocialAuth('Google')}
        >
          {isSocialLoading === 'Google' ? (
            <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
          ) : (
            <Image
              src="https://www.google.com/favicon.ico"
              alt="Google"
              width={20}
              height={20}
            />
          )}
          Google
        </Button>
        <Button
          variant="ghost"
          disabled={!!isSocialLoading}
          className="h-[46px] rounded-[16px] bg-white font-medium text-slate-600 gap-3 hover:bg-slate-50 border border-[#E8ECF0] cursor-pointer"
          onClick={() => handleSocialAuth('Facebook')}
        >
          {isSocialLoading === 'Facebook' ? (
            <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
          ) : (
            <Image
              src="https://www.facebook.com/favicon.ico"
              alt="Facebook"
              width={20}
              height={20}
            />
          )}
          Facebook
        </Button>
      </div>

      <div className="w-full text-center mt-12">
        <p className="text-[14px] text-slate-400 font-medium">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#066EFF] font-semibold">
            Create Account
          </Link>
        </p>
      </div>

      {/* Account Selector Modal Simulation */}
      {showAccountSelector && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-[360px] rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-6 text-center border-b border-slate-50">
              <div className="flex justify-center mb-4">
                <Image
                  src={showAccountSelector === 'Google' ? "https://www.google.com/favicon.ico" : "https://www.facebook.com/favicon.ico"}
                  alt={showAccountSelector}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900">Choose an account</h3>
              <p className="text-[13px] text-slate-500 mt-1">to continue to Wirapath</p>
            </div>
            
            <div className="p-2">
              <button 
                onClick={confirmAccount}
                className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors text-left rounded-[16px]"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                  A
                </div>
                <div>
                  <p className="text-[14px] font-bold text-slate-900">Alex</p>
                  <p className="text-[12px] text-slate-500">alex.dev@gmail.com</p>
                </div>
              </button>
              
              <button 
                onClick={() => setShowAccountSelector(null)}
                className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors text-left rounded-[16px]"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                  <span className="text-[18px]">+</span>
                </div>
                <div>
                  <p className="text-[14px] font-medium text-slate-600">Use another account</p>
                </div>
              </button>
            </div>
            
            <div className="p-4 bg-slate-50/50 text-[11px] text-slate-400 text-center leading-relaxed">
              To continue, Google will share your name, email address, language preference, and profile picture with Wirapath.
            </div>
          </div>
        </div>
      )}

      {/* Final Authenticating Loader */}
      {isSocialLoading === 'authenticating' && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[60] flex flex-col items-center justify-center animate-in fade-in duration-300">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
          <p className="text-[15px] font-semibold text-blue-900 animate-pulse">Authenticating...</p>
        </div>
      )}
    </div>
  );
}
