import { MapPin, Smile, ShieldCheck } from 'lucide-react';
import burgerUrl from '../assets/burger.svg';
import '../index.css';

export default function App() {
  return (
    <div className="min-h-screen w-full text-slate-100 selection:bg-emerald-500/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* HERO SECTION */}
        <div className="rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative border border-emerald-900/50 bg-emerald-950/20 backdrop-blur-xl">
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-600/10 blur-[100px] rounded-full" />

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-900/30 text-emerald-400 text-sm font-bold tracking-wide mb-6 border border-emerald-800/50">
              LAUNCHING 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              Stop searching. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-200">
                Start eating.
              </span>
            </h1>
            <p className="text-emerald-100/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              The mood-based restaurant finder for people who can't decide. 
              Find hidden gems in your neighborhood in three taps or less.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://apps.apple.com/app/idYOUR_APP_ID" 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-950/40 text-center"
              >
                Download on App Store
              </a>
            </div>
          </div>

          {/* Mockup Area (Phone Container) */}
          <div className="flex-1 relative w-full z-10">
             <div className="w-64 md:w-72 h-[500px] md:h-[550px] bg-slate-950 rounded-[3rem] border-[12px] border-emerald-950 shadow-2xl mx-auto flex flex-col items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent" />
               
               <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 bg-emerald-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30">
                    <img 
                      src={burgerUrl} 
                      alt="FindFood Logo" 
                      className="w-14 h-14 invert brightness-200" 
                    />
                  </div>
                  <span className="text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase">
                    FindFood
                  </span>
               </div>
             </div>
          </div>
        </div> {/* Hero Section Ends Here */}

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Feature icon={<Smile size={24}/>} title="Mood Match" desc="Tell us how you feel, we find the meal." />
          <Feature icon={<MapPin size={24}/>} title="Proximity" desc="Sorted by distance, tailored to your location." />
          <Feature icon={<ShieldCheck size={24}/>} title="Verified" desc="Curated lists from trusted local sources." />
        </div>
        
        {/* FOOTER */}
        <footer className="mt-24 flex flex-col items-center gap-6 border-t border-emerald-900/30 pt-12">
          <div className="flex gap-8 text-sm text-emerald-100/40">
            <a href="mailto:support@tryfindfood.com" className="hover:text-emerald-400 transition">Support</a>
            <a href="/privacy.html" className="hover:text-emerald-400 transition">Privacy Policy</a>
            <a href="/app-ads.txt" className="hover:text-emerald-400 transition">Ads.txt</a>
          </div>
          <p className="text-emerald-900 text-xs uppercase tracking-tighter font-bold">FindFood © 2026</p>
        </footer>

      </div>
    </div>
  )
}

function Feature({icon, title, desc}: {icon: any, title: string, desc: string}) {
  return (
    <div className="p-8 rounded-3xl bg-emerald-950/10 border border-emerald-900/20 hover:border-emerald-500/30 transition-colors group">
      <div className="text-emerald-500 mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-emerald-50">{title}</h3>
      <p className="text-emerald-100/40 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}