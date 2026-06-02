import React from 'react';

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-black/6 dark:border-white/6">
            <div className="max-w-6xl mx-auto px-5 lg:px-8 py-7">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                            <span className="text-white dark:text-black text-xs font-bold">D</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">Daffa Akhadi</span>
                    </div>

                    <p className="text-xs text-gray-400 dark:text-gray-600 text-center">
                        © {new Date().getFullYear()} Daffa Akhadi · Built with Laravel & React
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-1.5 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors group"
                    >
                        Back to top
                        <svg className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
