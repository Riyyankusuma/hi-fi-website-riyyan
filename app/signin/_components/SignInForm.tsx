"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

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

      <form className="w-full space-y-4">
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

        <Link href="/onboarding" className="block w-full group">
          <Button 
            type="button"
            className="w-full h-[48px] bg-[#066EFF] hover:bg-[#0556cc] text-white font-bold rounded-[16px] shadow-xl shadow-blue-500/30 transition-all text-[16px] cursor-pointer"
          >
            Sign In
          </Button>
        </Link>
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
          className="h-[46px] rounded-[16px] bg-white font-medium gap-3 hover:bg-slate-50 border border-[#E8ECF0]"
        >
          <Image
            src="https://www.google.com/favicon.ico"
            alt="Google"
            width={20}
            height={20}
          />
          Google
        </Button>
        <Button
          variant="ghost"
          className="h-[46px] rounded-[16px] bg-white font-medium text-slate-600 gap-3 hover:bg-slate-50 border border-[#E8ECF0]"
        >
          <Image
            src="https://www.facebook.com/favicon.ico"
            alt="Facebook"
            width={20}
            height={20}
          />
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
    </div>
  );
}
