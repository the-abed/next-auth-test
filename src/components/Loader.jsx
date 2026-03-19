export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      <div className="relative flex items-center justify-center">
        
        {/* Glow Effect */}
        <div className="absolute w-24 h-24 bg-blue-500 opacity-30 blur-2xl rounded-full animate-pulse"></div>

        {/* Spinner */}
        <div className="w-20 h-20 rounded-full border-[3px] border-transparent 
                        border-t-blue-400 border-r-purple-400 
                        animate-spin"></div>

        {/* Inner Glass Circle */}
        <div className="absolute w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20"></div>
      </div>

      {/* Text */}
      <p className="absolute mt-40 text-gray-300 text-sm tracking-widest animate-pulse">
        Loading...
      </p>
    </div>
  );
}