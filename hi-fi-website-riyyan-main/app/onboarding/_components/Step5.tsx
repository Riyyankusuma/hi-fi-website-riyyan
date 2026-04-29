"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  GraduationCapIcon,
  FileTextIcon,
} from "lucide-react";
import { useState, useRef } from "react";
import { uploadFileToServer } from "@/lib/uploadClient";

export default function Step5({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const f = e.target.files[0];
      setFile(f);
      try {
        setUploading(true);
        const res = await uploadFileToServer(f, "transcripts");
        if (res?.success) setUploadedUrl(res.url);
      } catch (err) {
        console.error("Upload error:", err);
      } finally {
        setUploading(false);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.name.match(/\.(pdf|jpg|png|jpeg)$/i)) {
        setFile(droppedFile);
        try {
          setUploading(true);
          const res = await uploadFileToServer(droppedFile, "transcripts");
          if (res?.success) setUploadedUrl(res.url);
        } catch (err) {
          console.error("Upload error:", err);
        } finally {
          setUploading(false);
        }
      }
    }
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

      <div
        className={`w-full min-h-[200px] md:h-[250px] rounded-[24px] md:rounded-[32px] border-[1.6px] border-dashed ${file ? 'border-green-400 bg-green-50/50' : 'border-[#066EFF4D] bg-[#F0F4FF80]'} flex flex-col items-center justify-center p-6 gap-4 cursor-pointer hover:bg-[#F0F4FF] transition-all group`}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png"
        />
        {file ? (
          <div className="flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center shadow-sm mb-2 md:mb-4">
              <FileTextIcon className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
            </div>
            <p className="text-[15px] md:text-[18px] font-semibold text-[#475569] mb-1 leading-tight max-w-[200px] sm:max-w-[300px] truncate">
              {file.name}
            </p>
            <p className="text-[12px] md:text-[13px] font-medium text-slate-400">
              {uploading ? 'Uploading...' : uploadedUrl ? 'Uploaded' : 'Click or drag to replace'}
            </p>
            {uploadedUrl && (
              <a className="text-[12px] text-blue-600 mt-2 underline" href={uploadedUrl} target="_blank" rel="noreferrer">
                View uploaded file
              </a>
            )}
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCapIcon className="w-10 h-10 md:w-12 md:h-12 text-[#066EFF]" />
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
          onClick={onNext}
          className="grow sm:grow-0 h-14 px-12 bg-linear-to-r from-[#066EFF] to-[#0556cc] hover:from-[#0556cc] hover:to-[#044bb3] rounded-[20px] text-[15px] font-bold text-white shadow-lg shadow-blue-500/25 gap-3 group transition-all active:scale-[0.98]"
        >
          Continue
          <ChevronRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
