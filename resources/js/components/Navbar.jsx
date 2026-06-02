import React, { useState, useEffect } from 'react';

const navLinks = [
    { label: 'About', href: 'about' },
    { label: 'Experience', href: 'experience' },
    { label: 'Projects', href: 'projects' },
    { label: 'Skills', href: 'skills' },
    { label: 'Achievements', href: 'achievements' },
    { label: 'Contact', href: 'contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 12);
            for (let i = navLinks.length - 1; i >= 0; i--) {
                const el = document.getElementById(navLinks[i].href);
                if (el && window.scrollY >= el.offsetTop - 100) {
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
        <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
            scrolled ? 'nav-blur shadow-sm' : 'bg-transparent'
        }`}>
            <div className="max-w-6xl mx-auto px-5 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-7 h-7 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                            <span className="text-white dark:text-black text-xs font-bold">D</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">Daffa Akhadi</span>
                    </button>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-0.5">
                        {navLinks.map(l => (
                            <button
                                key={l.href}
                                onClick={() => scrollTo(l.href)}
                                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                                    active === l.href
                                        ? 'bg-black/8 dark:bg-white/10 text-gray-900 dark:text-white'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                                }`}
                            >
                                {l.label}
                            </button>
                        ))}
                    </nav>

                    {/* Right */}
                    <div className="flex items-center gap-2">
                        {/* Dark toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-black/6 dark:hover:bg-white/8 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            )}
                        </button>

                        {/* Hire Me pill */}
                        <button
                            onClick={() => scrollTo('contact')}
                            className="btn-pill btn-dark hidden md:inline-flex"
                        >
                            Hire Me
                        </button>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden w-8 h-8 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-black/6 dark:hover:bg-white/8 transition-colors"
                        >
                            <div className="w-4 flex flex-col gap-1">
                                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="nav-blur border-t border-black/5 dark:border-white/5 px-5 py-3">
                    {navLinks.map(l => (
                        <button
                            key={l.href}
                            onClick={() => scrollTo(l.href)}
                            className="block w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                            {l.label}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollTo('contact')}
                        className="btn-pill btn-dark w-full justify-center mt-3"
                    >
                        Hire Me
                    </button>
                </div>
            </div>
        </header>
    );
}
