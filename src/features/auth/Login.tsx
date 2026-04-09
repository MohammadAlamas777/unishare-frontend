export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      <div className="w-full max-w-md rounded-lg bg-slate-800 p-8 shadow-xl">
        <h2 className="text-center text-3xl font-bold text-white">UniShare</h2>
        <p className="mt-2 text-center text-slate-400">Welcome back! Please login.</p>
        
        <form className="mt-8 space-y-6">
          <input 
            type="email" 
            placeholder="University Email" 
            className="w-full rounded-md bg-slate-700 p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full rounded-md bg-slate-700 p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full rounded-md bg-blue-600 p-3 font-bold text-white hover:bg-blue-700">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
