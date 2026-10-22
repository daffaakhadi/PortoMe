import React from 'react';

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-slate-200/80 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-5 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    
                    {/* Brand & Identity */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-pink-500 flex items-center justify-center text-white font-black text-sm shadow-md">
                            D
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                                Daffa Akhadi Yoga Perdana
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Fresh Graduate D3 RPLA · Telkom University (IPK 3.84/4.00)
                            </p>
                        </div>
                    </div>

                    {/* Quick navigation */}
                    <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-slate-600 dark:text-slate-400">
                        <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-violet-600 dark:hover:text-white transition-colors">
                            Tentang
                        </button>
                        <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-violet-600 dark:hover:text-white transition-colors">
                            Pengalaman
                        </button>
                        <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-violet-600 dark:hover:text-white transition-colors">
                            Proyek & HKI
                        </button>
                        <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-violet-600 dark:hover:text-white transition-colors">
                            Keahlian
                        </button>
                        <button onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-violet-600 dark:hover:text-white transition-colors">
                            Prestasi
                        </button>
                        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-violet-600 dark:hover:text-white transition-colors">
                            Kontak
                        </button>
                    </div>

                    {/* Back to top */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="btn-pill btn-outline text-xs py-2 px-3.5 flex items-center gap-1.5"
                            aria-label="Kembali ke atas"
                        >
                            <span>Ke Atas</span>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    </div>

                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
                    <p>
                        © {new Date().getFullYear()} Daffa Akhadi Yoga Perdana · Dirancang dengan desain floating modern & dark-light mode tinggi.
                    </p>
                    <p className="font-mono text-[11px]">
                        Telkom University · Klaten & Bandung
                    </p>
                </div>
            </div>
        </footer>
    );
}
