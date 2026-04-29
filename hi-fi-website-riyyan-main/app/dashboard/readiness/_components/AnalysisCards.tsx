"use client";

import { useState, useRef } from "react";
import { FileText, BookOpen, Upload, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const analysisItems = [
  {
    icon: FileText,
    title: "CV Analysis",
    status: "Uploaded & Analyzed",
    statusColor: "text-[#10B981]",
    description:
      "12 skills extracted, 3 experience entries detected. Your CV shows strong frontend focus but lacks backend and DevOps keywords.",
    action: "Re-upload CV",
    iconColor: "bg-[#F0F7FF] text-[#066EFF]",
  },
  {
    icon: BookOpen,
    title: "Academic Transcript",
    status: "Uploaded & Analyzed",
    statusColor: "text-[#10B981]",
    description:
      "GPA 3.45/4.00 detected. Strong academic performance in Data Structures and Algorithms. Software Engineering coursework identified.",
    action: "Re-upload Transcript",
    iconColor: "bg-[#FFF9F0] text-[#F59E0B]",
  },
];

export const AnalysisCards = () => {
  const [uploadedFiles, setUploadedFiles] = useState<{[key: number]: File}>({});
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFiles(prev => ({
        ...prev,
        [index]: e.target.files![0]
      }));
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 pb-10">
      {analysisItems.map((card, index) => (
        <div
          key={index}
          className="bg-white p-5 md:p-10 rounded-[24px] flex flex-col gap-4 h-full transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/20"
          style={{ border: "1.2px solid #F1F5F9" }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4 md:gap-5">
              <div
                className={cn(
                  "w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-[18px] flex items-center justify-center shrink-0",
                  card.iconColor,
                )}
              >
                <card.icon className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div className="space-y-1 pt-0.5">
                <h3 className="text-[14px] md:text-[15px] font-medium text-slate-900 font-poppins">
                  {card.title}
                </h3>
                <p className={cn("text-[13px] md:text-[14px] font-medium", card.statusColor)}>
                  {card.status}
                </p>
              </div>
            </div>
          </div>

          <p className="text-[12px] md:text-[13px] text-slate-500 leading-relaxed font-medium">
            {uploadedFiles[index] ? `File "${uploadedFiles[index].name}" has been uploaded and is being analyzed...` : card.description}
          </p>

          <button 
            onClick={() => fileInputRefs.current[index]?.click()}
            className="flex items-center gap-2.5 text-[#066EFF] font-medium text-[14px] md:text-[15px] w-fit hover:gap-3 transition-all group pt-2 cursor-pointer"
          >
            {uploadedFiles[index] ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Upload className="w-4 h-4" />}
            {uploadedFiles[index] ? 'Upload New File' : card.action}
          </button>
          <input
            type="file"
            className="hidden"
            ref={(el) => {
               if (el) {
                 fileInputRefs.current[index] = el;
               }
            }}
            onChange={(e) => handleFileChange(index, e)}
            accept={index === 0 ? ".pdf,.doc,.docx" : ".pdf,.jpg,.jpeg,.png"}
          />
        </div>
      ))}
    </div>
  );
};
