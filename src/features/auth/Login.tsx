export default function Login() {
  return (
    <div className="flex min-h-screen w-full font-sans overflow-hidden">
      
      {/* LEFT SIDE: Branding & Identity (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-[#1B5E20] items-center justify-center p-12 relative">
        {/* Subtle decorative circle to add depth */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-md text-center relative z-10">
          <h1 className="text-7xl font-black text-white tracking-tighter">
            Uni<span className="text-[#c5a059]">Share</span>
          </h1>
          <div className="mx-auto mt-4 h-2 w-24 rounded-full bg-[#c5a059]"></div>
          
          <p className="mt-8 text-2xl font-medium text-white/90 leading-snug">
            The exclusive peer-to-peer marketplace for <br />
            <span className="text-white font-bold">Al-Zaytoonah University students.</span>
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-4">
             <span className="h-px w-8 bg-white/30"></span>
             <p className="text-xs font-bold text-white/40 uppercase tracking-[0.4em]">
                Rent • Share • Save
             </p>
             <span className="h-px w-8 bg-white/30"></span>
          </div>
        </div>

        {/* Bottom decorative circle */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      {/* RIGHT SIDE: The Login Form (Full width on Mobile) */}
      <div className="flex w-full lg:w-1/2 bg-[#f4f6f4] items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-sm">
          
          {/* MOBILE LOGO: Only shows on screens smaller than 1024px (lg) */}
          <div className="lg:hidden text-center mb-10">
             <h1 className="text-5xl font-black text-[#1B5E20] tracking-tighter">
              Uni<span className="text-[#c5a059]">Share</span>
            </h1>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-3">
              Student Marketplace
            </p>
          </div>

          {/* LOGIN CARD */}
          <div className="rounded-[24px] bg-white p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Welcome back</h2>
              <p className="text-sm text-gray-500 mt-2">Sign in to start trading with your peers.</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-[#1B5E20]">
                  University ID
                </label>
                <input
                  type="text"
                  placeholder="Eg. 202110555"
                  className="w-full rounded-xl border border-gray-200 bg-white p-4 text-sm outline-none transition-all focus:border-[#2E7D32] focus:ring-4 focus:ring-[#2E7D32]/5 placeholder:text-gray-300"
                />
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                   <label className="block text-[10px] font-black uppercase tracking-widest text-[#1B5E20]">
                    Password
                  </label>
                  <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-[#2E7D32] transition-colors">
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-200 bg-white p-4 text-sm outline-none transition-all focus:border-[#2E7D32] focus:ring-4 focus:ring-[#2E7D32]/5 placeholder:text-gray-300"
                />
              </div>

              <button className="mt-4 w-full cursor-pointer rounded-xl bg-[#1B5E20] p-4 text-sm font-bold text-white transition-all hover:bg-[#2E7D32] shadow-xl shadow-[#1B5E20]/20 active:scale-[0.98]">
                Sign In
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-gray-50 text-center">
              <p className="text-sm text-gray-500">
                Don't have an account? <br className="md:hidden" />
                <a href="#" className="font-bold text-[#2E7D32] hover:underline ml-1">Register Now</a>
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <p className="mt-12 text-center text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">
            © 2026 Al-Zaytoonah University of Jordan
          </p>
        </div>
      </div>
    </div>
  );
}
