export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-20">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-500 text-white font-bold p-1.5 rounded-lg text-sm">TV</div>
            <span className="font-extrabold text-lg tracking-tight text-gray-900">TopVerified</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full font-bold text-sm border border-orange-200 flex items-center space-x-1">
            <span>₦3,750</span>
            <span className="bg-orange-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center ml-1 cursor-pointer">+</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 text-sm">E</div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-md mx-auto p-4 space-y-5">
        {/* Welcome Banner */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-xl font-bold text-gray-900">Welcome back, Eric! 👋</h1>
          <p className="text-xs text-gray-500 mt-0.5">Here's what's happening with your account today.</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-gray-400 text-xs font-medium">TOTAL DEPOSITS</div>
            <div className="text-lg font-extrabold text-gray-900 mt-1">₦116,200</div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-gray-400 text-xs font-medium">SUCCESS RATE</div>
            <div className="text-lg font-extrabold text-green-600 mt-1">97.5%</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Quick Actions</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-3 p-3 rounded-xl border border-gray-100 bg-gray-50/50">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">🛒</div>
              <div>
                <div className="text-sm font-bold text-gray-800">Buy Accounts</div>
                <div className="text-[10px] text-gray-400">Instant access</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-xl border border-gray-100 bg-gray-50/50">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">🌐</div>
              <div>
                <div className="text-sm font-bold text-gray-800">USA Numbers</div>
                <div className="text-[10px] text-gray-400">Instant access</div>
              </div>
            </div>
          </div>
        </div>

        {/* LIVE ACTIVITY SECTION */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-red-50 px-4 py-3 border-b border-red-100 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="font-extrabold text-red-600 text-xs uppercase tracking-wider">Live Activity</span>
            </div>
            <span className="text-[10px] text-gray-400">Real-time updates</span>
          </div>

          <div className="divide-y divide-gray-100 text-sm">
            <div className="p-3.5 flex justify-between items-center">
              <div>
                <span className="font-bold text-gray-800">Sam***</span> 
                <span className="text-green-600 font-medium ml-1">deposited via Dsociopay</span>
                <div className="text-xs font-bold text-green-600 mt-0.5">₦5,000.00</div>
              </div>
              <span className="text-xs text-gray-400">just now</span>
            </div>
            <div className="p-3.5 flex justify-between items-center">
              <div>
                <span className="font-bold text-gray-800">Ola***</span> 
                <span className="text-blue-600 font-medium ml-1">signed in</span>
              </div>
              <span className="text-xs text-gray-400">just now</span>
            </div>
            <div className="p-3.5 flex justify-between items-center">
              <div>
                <span className="font-bold text-gray-800">aka***</span> 
                <span className="text-purple-600 font-medium ml-1">bought</span>
                <div className="text-xs text-gray-500 font-semibold mt-0.5">USA • Tiktok</div>
                <div className="text-xs font-bold text-orange-600 mt-0.5">₦1,500.00</div>
              </div>
              <span className="text-xs text-gray-400">just now</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

