'use client';
import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState('landing');

  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-white text-gray-800 font-sans pb-16">
        <header className="border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur z-50 px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-500 text-white font-bold p-1.5 rounded-lg text-sm">TV</div>
            <span className="font-extrabold text-lg tracking-tight text-gray-900">TopVerified</span>
          </div>
          <button 
            onClick={() => setView('dashboard')}
            className="bg-orange-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-sm"
          >
            Sign In
          </button>
        </header>

        <main className="px-4 pt-6 space-y-6 max-w-md mx-auto">
          <div className="text-center space-y-3">
            <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-bold border border-orange-200 inline-block">
              🔥 Instant Delivery & 24/7 Support
            </span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
              Get Virtual Numbers, <span className="text-orange-500">Grow Social Media</span>
            </h1>
            <p className="text-sm text-gray-500">
              Buy Celebrity Accounts & More. The all-in-one platform for hustlers, freelancers, and creators.
            </p>
          </div>

          <div className="flex space-x-3">
            <button 
              onClick={() => setView('dashboard')}
              className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-bold text-sm text-center shadow-md shadow-orange-500/20"
            >
              Start Growing ➔
            </button>
            <div className="flex-1 border border-gray-200 py-3 rounded-xl font-bold text-sm text-center text-gray-700 bg-gray-50 flex items-center justify-center">
              Explore Services
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Popular Countries For Numbers</div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold shadow-xs">🇺🇸 USA</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold shadow-xs">🇬🇧 UK</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold shadow-xs">🇨🇦 Canada</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold shadow-xs">🇳🇬 Nigeria</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Our Services</div>
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">📱</div>
              <div className="font-bold text-gray-900 text-base">Virtual Numbers</div>
              <p className="text-xs text-gray-500">Get real phone numbers from 150+ countries for SMS verification.</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-20">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="bg-orange-500 text-white font-bold p-1.5 rounded-lg text-sm">TV</div>
          <span className="font-extrabold text-lg tracking-tight text-gray-900">TopVerified</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full font-bold text-sm border border-orange-200 flex items-center space-x-1">
            <span>₦3,750</span>
            <span className="bg-orange-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center ml-1">+</span>
          </div>
          <button onClick={() => setView('landing')} className="text-xs text-red-500 font-bold px-2.5 py-1 bg-red-50 rounded-lg">Logout</button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-5">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-xl font-bold text-gray-900">Welcome back, Eric! 👋</h1>
          <p className="text-xs text-gray-500 mt-0.5">Here's what's happening with your account today.</p>
        </div>

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
          </div>
        </div>
      </main>
    </div>
  );
}

