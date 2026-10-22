import React, { useState, useEffect } from 'react';

export default function Loader() {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const inc = Math.floor(Math.random() * 8) + 4;
                return Math.min(100, prev + inc);
            });
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Symmetric figure 8 path centered at (80, 80) in a 160x160 viewBox
    const figure8Path = "M 80,80 C 54,60 54,26 80,26 C 106,26 106,60 80,80 C 54,100 54,134 80,134 C 106,134 106,100 80,80 Z";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center gradient-bg noise select-none p-4 w-screen h-screen">
            {/* ── DEAD-CENTER FLOATING LOADER ── */}
            <div className="relative card-float p-8 sm:p-9 rounded-[32px] flex flex-col items-center justify-center text-center shadow-2xl border border-white/80 dark:border-white/10 bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl animate-scaleIn">
                
                {/* Ambient Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-gradient-to-tr from-violet-600/30 via-pink-500/25 to-cyan-400/25 blur-3xl animate-pulse pointer-events-none -z-0"></div>

                {/* ── FIGURE-8 (ANGKA 8 MUTER) ── */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                    
                    {/* Outer Rotating Halo Ring */}
                    <div className="absolute inset-0 rounded-full border border-violet-500/25 dark:border-white/10 animate-spin-8-reverse pointer-events-none">
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]"></span>
                    </div>

                    {/* Primary Spinning Figure-8 (Angka 8 Muter) */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 animate-spin-8 animate-glow-8 flex items-center justify-center">
                        <svg
                            viewBox="0 0 160 160"
                            className="w-full h-full filter drop-shadow-[0_0_12px_rgba(139,92,246,0.85)]"
                        >
                            <defs>
                                <linearGradient id="fig8-gradient-clean" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#8b5cf6" />
                                    <stop offset="35%" stopColor="#ec4899" />
                                    <stop offset="70%" stopColor="#06b6d4" />
                                    <stop offset="100%" stopColor="#a855f7" />
                                </linearGradient>
                            </defs>

                            {/* Background Track */}
                            <path
                                d={figure8Path}
                                fill="none"
                                stroke="rgba(139, 92, 246, 0.18)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Glowing Stroke */}
                            <path
                                d={figure8Path}
                                fill="none"
                                stroke="url(#fig8-gradient-clean)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="animate-dash-8"
                            />

                            {/* Laser Highlight */}
                            <path
                                d={figure8Path}
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeDasharray="25 180"
                                className="animate-dash-8"
                            />
                        </svg>
                    </div>

                    {/* Center Core Floating 8 Monogram */}
                    <div className="absolute w-6 h-6 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-white/20 dark:border-black/20 flex items-center justify-center text-[10px] font-black shadow-lg">
                        8
                    </div>
                </div>

                {/* ── ONLY "LOADING..." & PERCENTAGE (NO EXTRA TEXT) ── */}
                <div className="flex flex-col items-center gap-2 mt-5">
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200 tracking-[0.25em] uppercase">
                        Loading...
                    </p>

                    <div className="flex items-center gap-2.5 w-36">
                        <div className="flex-1 h-1 bg-slate-200/80 dark:bg-white/10 rounded-full overflow-hidden p-0.5">
                            <div
                                className="h-full bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-400 rounded-full transition-all duration-100 shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                                style={{ width: `${percent}%` }}
                            ></div>
                        </div>
                        <span className="font-mono text-[11px] font-bold text-violet-600 dark:text-violet-400 w-7 text-right tabular-nums">
                            {percent}%
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
