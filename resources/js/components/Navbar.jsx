import React, { useState, useEffect } from 'react';

const navLinks = [
    { label: 'Tentang', href: 'about' },
    { label: 'Pendidikan & Exp', href: 'experience' },
    { label: 'Proyek & HKI', href: 'projects' },
    { label: 'Keahlian', href: 'skills' },
    { label: 'Prestasi', href: 'achievements' },
    { label: 'Kontak', href: 'contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            for (let i = navLinks.length - 1; i >= 0; i--) {
                const el = document.getElementById(navLinks[i].href);
                if (el && window.scrollY >= el.offsetTop - 140) {
                    setActive(navLinks[i].href);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        setMobileOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-3 pointer-events-none">
            <div className={`max-w-6xl mx-auto pointer-events-auto transition-all duration-300 rounded-2xl ${
                scrolled
                    ? 'nav-float py-2 px-4 sm:px-6'
                    : 'bg-white/60 dark:bg-black/30 backdrop-blur-md border border-slate-200/50 dark:border-white/10 py-2.5 px-4 sm:px-6 shadow-sm'
            }`}>
                <div className="flex items-center justify-between">
                    {/* Brand / Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2.5 group text-left"
                    >
                        <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                            <span>D</span>
                            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white dark:border-slate-900"></span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                Daffa Akhadi
                            </span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-none">
                                Software Eng & Creative
                            </span>
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-white/[0.05] p-1 rounded-full border border-slate-200/60 dark:border-white/[0.08]">
                        {navLinks.map((l) => {
                            const isActive = active === l.href;
                            return (
                                <button
                                    key={l.href}
                                    onClick={() => scrollTo(l.href)}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                                        isActive
                                            ? 'bg-white dark:bg-violet-600 text-slate-900 dark:text-white shadow-sm scale-[1.02]'
                                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10'
                                    }`}
                                >
                                    {l.label}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Right utilities */}
                    <div className="flex items-center gap-2">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="relative p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-colors"
                            aria-label="Toggle theme mode"
                            title={darkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
                        >
                            {darkMode ? (
                                <svg className="w-4 h-4 text-amber-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            )}
                        </button>

                        {/* CTA Button */}
                        <button
                            onClick={() => scrollTo('contact')}
                            className="hidden sm:inline-flex btn-pill btn-dark text-xs py-2 px-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                            Hubungi Saya
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-colors"
                            aria-label="Menu"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                {mobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {mobileOpen && (
                    <div className="lg:hidden mt-3 pt-3 border-t border-slate-200/70 dark:border-white/10 space-y-1">
                        {navLinks.map((l) => (
                            <button
                                key={l.href}
                                onClick={() => scrollTo(l.href)}
                                className={`w-full text-left px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                                    active === l.href
                                        ? 'bg-violet-600 text-white'
                                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
                                }`}
                            >
                                <span>{l.label}</span>
                                <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        ))}
                        <button
                            onClick={() => scrollTo('contact')}
                            className="w-full mt-2 btn-pill btn-gradient text-xs py-2.5 justify-center"
                        >
                            Hubungi Saya
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
