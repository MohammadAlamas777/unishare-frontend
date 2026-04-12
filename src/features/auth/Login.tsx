export default function Login() {
  return (
    <div className="flex min-h-screen w-full font-sans">
      
      {/* LEFT SIDE: Branding & Identity */}
      <div className="hidden lg:flex w-1/2 bg-[#1B5E20] items-center justify-center p-12">
        <div className="max-w-md text-center">
          <h1 className="text-6xl font-black text-white tracking-tighter">
            Uni<span className="text-[#c5a059]">Share</span>
          </h1>
          <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-[#c5a059]"></div>
          <p className="mt-8 text-xl font-medium text-white/80 leading-relaxed">
            The exclusive peer-to-peer marketplace for <br />
            <span className="text-white font-bold">Al-Zaytoonah University students.</span>
          </p>
          <p className="mt-4 text-sm text-white/50 uppercase tracking-[0.3em]">
            Rent. Share. Save.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: The Login Form */}
      <div className="flex w-full lg:w-1/2 bg-[#f4f6f4] items-center justify-center p-8">
        <div className="w-full max-w-sm">
          
          {/* Mobile-only Logo (shows only on small screens) */}
          <div className="lg:hidden text-center mb-12">
             <h1 className="text-4xl font-black text-[#1B5E20] tracking-tighter">
              Uni<span className="text-[#c5a059]">Share</span>
            </h1>
          </div>

          {/* Login Card */}
          <div className="rounded-[16px] bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Welcome back</h2>
              <p className="text-sm text-gray-500 mt-1">Enter your credentials to access the marketplace</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[#1B5E20]">
                  University ID
                </label>
                <input
                  type="text"
                  placeholder="Eg. 202110555"
                  className="w-full rounded-lg border border-gray-200 bg-white p-4 text-sm outline-none transition-all focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[#1B5E20]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-200 bg-white p-4 text-sm outline-none transition-all focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/10"
                />
                <div className="mt-2 text-right">
                  <a href="#" className="text-xs font-bold text-gray-400 hover:text-[#2E7D32]">
                    Forgot password?
                  </a>
                </div>
              </div>

              <button className="mt-4 w-full cursor-pointer rounded-lg bg-[#1B5E20] p-4 text-sm font-bold text-white transition-all hover:bg-[#2E7D32] shadow-lg shadow-[#1B5E20]/20 active:scale-[0.98]">
                Sign In
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-xs text-gray-400 font-medium">
                Don't have an account? <a href="#" className="font-bold text-[#2E7D32] hover:underline">Register Now</a>
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-[10px] font-medium text-gray-300 uppercase tracking-widest">
            © 2026 Al-Zaytoonah University of Jordan
          </p>
        </div>
      </div>
    </div>
  );
}
