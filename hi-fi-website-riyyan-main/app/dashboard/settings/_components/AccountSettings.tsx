"use client";

export const AccountSettings = () => {
  return (
    <div className="p-5 md:p-10 space-y-6 md:space-y-8 w-full">
      <div className="space-y-1 md:space-y-1.5">
        <h2 className="text-[20px] md:text-[22px] font-semibold text-slate-900 font-poppins">
          Account Settings
        </h2>
        <p className="text-[14px] md:text-[15px] text-slate-400 font-normal font-poppins">
          Manage your personal information
        </p>
      </div>

      <div className="space-y-5 md:space-y-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <div className="space-y-2.5">
            <label className="text-[14px] font-semibold text-slate-700 font-poppins ml-1">
              First Name
            </label>
            <input
              type="text"
              defaultValue="Alex"
              className="w-full bg-slate-50 border-[0.8px] border-slate-100 rounded-[12px] px-5 py-4 focus:bg-white focus:border-blue-200 outline-none transition-all text-[15px] text-slate-700 font-medium font-poppins"
            />
          </div>
          <div className="space-y-2.5">
            <label className="text-[14px] font-semibold text-slate-700 font-poppins ml-1">
              Last Name
            </label>
            <input
              type="text"
              defaultValue="Rahman"
              className="w-full bg-slate-50 border-[0.8px] border-slate-100 rounded-[12px] px-5 py-4 focus:bg-white focus:border-blue-200 outline-none transition-all text-[15px] text-slate-700 font-medium font-poppins"
            />
          </div>
        </div>

        <div className="space-y-2.5">
          <label className="text-[14px] font-semibold text-slate-700 font-poppins ml-1">
            Email
          </label>
          <input
            type="email"
            defaultValue="alex.rahman@email.com"
            className="w-full bg-slate-50 border-[0.8px] border-slate-100 rounded-[12px] px-5 py-4 focus:bg-white focus:border-blue-200 outline-none transition-all text-[15px] text-slate-700 font-medium font-poppins"
          />
        </div>

        <div className="space-y-2.5">
          <label className="text-[14px] font-semibold text-slate-700 font-poppins ml-1">
            University
          </label>
          <input
            type="text"
            defaultValue="Universitas Indonesia"
            className="w-full bg-slate-50 border-[0.8px] border-slate-100 rounded-[12px] px-5 py-4 focus:bg-white focus:border-blue-200 outline-none transition-all text-[15px] text-slate-700 font-medium font-poppins"
          />
        </div>

        <div className="pt-2">
          <button className="w-full md:w-auto px-10 py-4 bg-[#066EFF] text-white rounded-[14px] font-semibold font-poppins hover:bg-blue-600 transition-all active:scale-[0.98] shadow-[0_8px_20px_rgba(6,110,255,0.2)] cursor-pointer">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
