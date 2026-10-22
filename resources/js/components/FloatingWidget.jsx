import React, { useState, useEffect } from 'react';

export default function FloatingWidget({ darkMode, setDarkMode }) {
    const [showTop, setShowTop] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('akhadidaffa13@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <aside aria-label="Aksi Cepat" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
            {/* Copied Toast Alert */}
            {copied && (
                <div className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold shadow-xl animate-fadeUp flex items-center gap-1.5">
                    <span>✓</span>
                    <span>Email disalin: akhadidaffa13@gmail.com</span>
                </div>
            )}

            {/* Floating Action Island / Dock */}
            <div className="pointer-events-auto p-1.5 rounded-full card-float flex items-center gap-1.5 shadow-2xl border border-slate-200/90 dark:border-white/15 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl">
                
                {/* Theme Toggle in Dock */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                    title={darkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
                    aria-label="Toggle theme"
                >
                    {darkMode ? (
                        <svg className="w-5 h-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    )}
                </button>

                {/* Direct WhatsApp Chat */}
                <a
                    href="https://wa.me/6282190116233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-emerald-500 hover:bg-emerald-600 hover:scale-105 transition-all shadow-md"
                    title="Chat via WhatsApp (+62 821-9011-6233)"
                    aria-label="WhatsApp"
                >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                </a>

                {/* Quick Copy Email */}
                <button
                    onClick={copyEmail}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                    title="Salin Email (akhadidaffa13@gmail.com)"
                    aria-label="Copy Email"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </button>

                {/* Back to top button (shows on scroll) */}
                {showTop && (
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-violet-600 text-white hover:bg-violet-700 hover:scale-105 transition-all shadow-md animate-fadeUp"
                        title="Kembali ke atas"
                        aria-label="Scroll to top"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                )}
            </div>
        </aside>
    );
}
