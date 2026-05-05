"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  GraduationCapIcon,
  FileTextIcon,
  Loader2Icon,
  CheckCircle2Icon,
  XIcon,
  TrophyIcon,
  BookOpenIcon
} from "lucide-react";
import { toast } from "sonner";

type Step5Props = {
  onNext: () => void;
  onBack: () => void;
};

type AnalysisStatus = "idle" | "uploading" | "analyzing" | "completed";

export default function Step5({ onNext, onBack }: Step5Props) {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<AnalysisStatus>("idle");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [analysisResult, setAnalysisResult] = useState<{
    gpa: string;
    subjects: string[];
    academicLevel: string;
  } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      processFile(selectedFile);
    }
  };

  const processFile = (selectedFile: File) => {
    // Basic validation
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
    ];
    if (!allowedTypes.includes(selectedFile.type)) {
      toast.error("Please upload a PDF, JPG, or PNG file");
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      toast.error("File size exceeds 10MB limit");
      return;
    }

    setFile(selectedFile);
    setStatus("uploading");
    
    // Simulate upload
    setTimeout(() => {
      setStatus("idle");
      toast.success("Transcript uploaded successfully!");
    }, 1500);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      processFile(droppedFile);
    }
  };

  const startAnalysis = () => {
    if (!file) return;
    
    setStatus("analyzing");
    
    // Simulate AI analysis of transcript
    setTimeout(() => {
      setAnalysisResult({
        gpa: "3.85 / 4.00",
        subjects: ["Data Structures", "Algorithms", "Software Engineering", "Artificial Intelligence"],
        academicLevel: "Final Year Student - Informatics Engineering",
      });
      setStatus("completed");
      toast.success("Academic analysis complete!");
    }, 3000);
  };

  const resetUpload = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    setStatus("idle");
    setAnalysisResult(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex flex-col items-center justify-center w-full animate-in fade-in duration-500 max-w-[720px] mx-auto py-4 px-4 sm:px-0">
      <div className="w-full mb-8 md:mb-10 text-center md:text-left">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#0D3E9B] mb-2 tracking-tight leading-tight">
          Upload Academic Transcript
        </h2>
        <p className="text-[14px] md:text-[15px] font-medium text-slate-400 leading-relaxed opacity-80">
          Your transcript helps us map your academic competencies to industry
          requirements.
        </p>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
      />

      <div 
        onClick={() => status === "idle" && !file && fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`w-full min-h-[200px] md:h-[250px] rounded-[24px] md:rounded-[32px] border-[1.6px] border-dashed transition-all group relative flex flex-col items-center justify-center p-6 gap-4
          ${isDragging ? "border-[#066EFF] bg-[#F0F4FF] scale-[1.02]" : "border-[#066EFF4D] bg-[#F0F4FF80]"}
          ${!file ? "cursor-pointer hover:bg-[#F0F4FF]" : "cursor-default"}
        `}
      >
        {!file && status === "idle" && (
          <>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-sm shadow-blue-100 group-hover:scale-105 transition-transform">
              <GraduationCapIcon className="w-6 h-6 md:w-8 md:h-8 text-[#066EFF]" />
            </div>
            <div className="text-center">
              <p className="text-[15px] md:text-[18px] font-medium text-[#475569] mb-1 md:mb-2 leading-tight">
                Drop your transcript here or click to browse
              </p>
              <p className="text-[12px] md:text-[13px] font-medium text-slate-400">
                Supports PDF, JPG, PNG (Max 10MB)
              </p>
            </div>
          </>
        )}

        {status === "uploading" && (
          <div className="flex flex-col items-center gap-4">
            <Loader2Icon className="w-10 h-10 text-[#066EFF] animate-spin" />
            <p className="text-[16px] font-semibold text-[#066EFF]">Uploading Transcript...</p>
          </div>
        )}

        {file && status !== "uploading" && (
          <div className="w-full flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-blue-50 w-full max-w-md relative">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#066EFF]">
                <FileTextIcon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-bold text-[#0D3E9B] truncate">{file.name}</p>
                <p className="text-[12px] font-medium text-slate-400">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
              </div>
              <button 
                onClick={resetUpload}
                className="p-1 hover:bg-red-50 rounded-full text-slate-300 hover:text-red-500 transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {status === "idle" && (
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  startAnalysis();
                }}
                className="bg-[#066EFF] hover:bg-[#0556cc] text-white px-8 py-6 h-auto rounded-2xl text-[16px] font-bold shadow-lg shadow-blue-500/20"
              >
                Analyze Transcript
              </Button>
            )}

            {status === "analyzing" && (
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3 text-[#066EFF]">
                  <Loader2Icon className="w-5 h-5 animate-spin" />
                  <span className="text-[15px] font-bold">Mapping competencies...</span>
                </div>
                <div className="w-48 h-1.5 bg-blue-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#066EFF] animate-progress-fast" style={{ width: '100%' }}></div>
                </div>
              </div>
            )}

            {status === "completed" && analysisResult && (
              <div className="w-full animate-in zoom-in-95 duration-500 mt-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-blue-100 space-y-5">
                  <div className="flex items-center justify-between border-b border-blue-50 pb-3">
                    <div className="flex items-center gap-2 text-[#0D3E9B]">
                      <CheckCircle2Icon className="w-5 h-5 text-green-500" />
                      <span className="text-[14px] font-bold uppercase tracking-wider">Academic Profile</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                      <TrophyIcon className="w-3.5 h-3.5 text-yellow-600" />
                      <span className="text-[12px] font-bold text-yellow-700">GPA: {analysisResult.gpa}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[12px] font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
                      <GraduationCapIcon className="w-3.5 h-3.5" />
                      Current Standing
                    </h4>
                    <p className="text-[15px] font-semibold text-[#0D3E9B]">
                      {analysisResult.academicLevel}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[12px] font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
                      <BookOpenIcon className="w-3.5 h-3.5" />
                      Top Competencies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {analysisResult.subjects.map((subject, i) => (
                        <span key={i} className="px-3 py-1 bg-white text-[#066EFF] text-[12px] font-bold rounded-lg border border-blue-100 shadow-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="w-full text-center md:text-left mt-8">
        <button 
          onClick={onNext}
          className="text-[14px] font-semibold text-slate-400 hover:text-[#066EFF] transition-colors cursor-pointer"
        >
          I&apos;ll do this later →
        </button>
      </div>

      <div className="flex items-center gap-3 mt-10 md:mt-12 w-full">
        <button
          onClick={onBack}
          className="h-14 w-14 flex items-center justify-center rounded-[20px] bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-gray-900 transition-all active:scale-95 sm:w-auto sm:px-6 sm:gap-2 sm:bg-transparent sm:hover:bg-transparent sm:h-auto"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          <span className="hidden sm:inline text-[15px] font-semibold">Back</span>
        </button>
        <div className="hidden sm:block grow" />
        <Button
          disabled={status === "analyzing" || status === "uploading"}
          onClick={onNext}
          className="grow sm:grow-0 h-14 px-12 bg-linear-to-r from-[#066EFF] to-[#0556cc] hover:from-[#0556cc] hover:to-[#044bb3] rounded-[20px] text-[15px] font-bold text-white shadow-lg shadow-blue-500/25 gap-3 group transition-all active:scale-[0.98] disabled:opacity-50"
        >
          {status === "completed" ? "Looks Good, Continue" : "Continue"}
          <ChevronRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}

