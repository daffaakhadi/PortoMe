import React, { useEffect, useState, useRef } from 'react';

const dynamicPhrases = [
    {
        first: 'Software Engineering',
        firstGradient: 'from-violet-600 via-indigo-600 to-pink-600 dark:from-violet-400 dark:via-indigo-300 dark:to-pink-400',
        lineColor: 'bg-violet-200/60 dark:bg-violet-900/40',
        second: 'Creative Media',
    },
    {
        first: 'Backend Architecture',
        firstGradient: 'from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400',
        lineColor: 'bg-blue-200/60 dark:bg-blue-900/40',
        second: 'UI/UX Design',
    },
    {
        first: 'Product Leadership',
        firstGradient: 'from-pink-600 via-rose-600 to-amber-500 dark:from-pink-400 dark:via-rose-300 dark:to-amber-400',
        lineColor: 'bg-pink-200/60 dark:bg-pink-900/40',
        second: 'Visual Storytelling',
    },
    {
        first: 'Technical Innovation',
        firstGradient: 'from-emerald-600 via-teal-600 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400',
        lineColor: 'bg-emerald-200/60 dark:bg-emerald-900/40',
        second: 'Digital Solutions',
    },
];

export default function Hero() {
    const [copied, setCopied] = useState(false);
    const [visible, setVisible] = useState(false);
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 120);
        return () => clearTimeout(timer);
    }, []);

    // Automatic word rotation every 3.2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            cycleNextPhrase();
        }, 3200);
        return () => clearInterval(interval);
    }, [phraseIdx]);

    const cycleNextPhrase = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setPhraseIdx((prev) => (prev + 1) % dynamicPhrases.length);
            setIsTransitioning(false);
        }, 280);
    };

    const currentPhrase = dynamicPhrases[phraseIdx];

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('akhadidaffa13@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
            {/* ── AMBIENT FLOATING GLOW BLOBS ── */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-violet-600/25 via-pink-500/20 to-sky-400/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow -z-0"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-float-delayed -z-0"></div>
            <div className="absolute top-32 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none animate-float-gentle -z-0"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    
                    {/* ── LEFT COLUMN: HERO HEADLINE & ACTIONS ── */}
                    <div className="lg:col-span-7 text-left">
                        {/* Status badge with floating pulse */}
                        <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full card-float mb-6 transition-all duration-700 ${
                            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                Fresh Graduate · IPK 3.84/4.00 · Telkom University
                            </span>
                        </div>

                        {/* Subtitle / greeting */}
                        <p className={`text-xs sm:text-sm font-bold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-2 transition-all duration-700 delay-100 ${
                            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                            Daffa Akhadi Yoga Perdana
                        </p>

                        {/* ── DYNAMIC HEADLINE (GANTI-GANTI PER KATA) ── */}
                        <div
                            onClick={cycleNextPhrase}
                            className="cursor-pointer select-none mb-6"
                        >
                            <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-[3.15rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] transition-all duration-700 delay-150 ${
                                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                                {/* Line 1: Bridging + Dynamic Phrase (Always side-by-side, no wrapping downwards) */}
                                <div className="flex items-baseline flex-wrap sm:flex-nowrap gap-x-3 mb-1.5">
                                    <span className="text-slate-900 dark:text-white flex-shrink-0">
                                        Bridging
                                    </span>
                                    <span
                                        className={`inline-block transition-all duration-300 ease-out transform ${
                                            isTransitioning
                                                ? 'opacity-0 -translate-y-2 scale-95 blur-[1px]'
                                                : 'opacity-100 translate-y-0 scale-100 blur-0'
                                        }`}
                                    >
                                        <span className="relative inline-block whitespace-nowrap">
                                            <span className={`relative z-10 text-transparent bg-clip-text bg-gradient-to-r ${currentPhrase.firstGradient}`}>
                                                {currentPhrase.first}
                                            </span>
                                            <span className={`absolute -bottom-1 left-0 right-0 h-2 rounded-full -z-0 transition-all duration-500 ${currentPhrase.lineColor}`}></span>
                                        </span>
                                    </span>
                                </div>

                                {/* Line 2: with + Dynamic Phrase (Always side-by-side, no wrapping downwards) */}
                                <div className="flex items-baseline flex-wrap sm:flex-nowrap gap-x-3">
                                    <span className="text-slate-900 dark:text-white flex-shrink-0">
                                        with
                                    </span>
                                    <span
                                        className={`inline-block transition-all duration-300 ease-out transform ${
                                            isTransitioning
                                                ? 'opacity-0 -translate-y-2 scale-95 blur-[1px]'
                                                : 'opacity-100 translate-y-0 scale-100 blur-0'
                                        }`}
                                    >
                                        <span className="relative inline-block whitespace-nowrap text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                                            {currentPhrase.second}
                                        </span>
                                    </span>
                                </div>
                            </h1>
                        </div>

                        {/* Bio summary strictly from CV */}
                        <p className={`text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-200 ${
                            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                            Lulusan D3 Rekayasa Perangkat Lunak Aplikasi <strong className="text-slate-900 dark:text-white font-semibold">Telkom University</strong> dengan 
                            pengalaman nyata di <strong className="text-slate-900 dark:text-white font-semibold">Backend Development</strong>, 
                            <strong className="text-slate-900 dark:text-white font-semibold"> UI/UX Design</strong>, 
                            <strong className="text-slate-900 dark:text-white font-semibold"> Video Editing</strong>, dan 
                            kepemimpinan startup C-Level di <strong className="text-slate-900 dark:text-white font-semibold">Ko+Lab</strong> & <strong className="text-slate-900 dark:text-white font-semibold">Digistar Club</strong>.
                        </p>

                        {/* Call to Actions */}
                        <div className={`flex flex-wrap items-center gap-3.5 mb-10 transition-all duration-700 delay-300 ${
                            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                            <button
                                onClick={() => scrollTo('projects')}
                                className="btn-pill btn-gradient text-sm shadow-lg shadow-violet-500/25 group"
                            >
                                <span>Lihat Portofolio & Proyek</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>

                            <button
                                onClick={() => scrollTo('experience')}
                                className="btn-pill btn-outline text-sm"
                            >
                                <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Pengalaman & Karier</span>
                            </button>

                            <button
                                onClick={copyEmail}
                                className="btn-pill btn-outline text-xs py-2.5 px-4"
                                title="Salin Email"
                            >
                                <svg className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <span>{copied ? '✓ Email Tersalin!' : 'akhadidaffa13@gmail.com'}</span>
                            </button>
                        </div>

                        {/* Social & Contact links quick bar */}
                        <div className={`flex items-center gap-3 text-slate-500 dark:text-slate-400 transition-all duration-700 delay-400 ${
                            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                Koneksi:
                            </span>
                            <a
                                href="http://linkedin.com/in/daffa-akhadi-yoga-perdana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-xl card hover:text-violet-600 dark:hover:text-violet-400 hover:scale-110 transition-all"
                                aria-label="LinkedIn Profile"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/daffaakhadi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-xl card hover:text-violet-600 dark:hover:text-violet-400 hover:scale-110 transition-all"
                                aria-label="GitHub Profile"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/6282190116233"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-xl card hover:text-emerald-500 hover:scale-110 transition-all"
                                aria-label="WhatsApp Contact"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                </svg>
                            </a>
                            <span className="text-xs text-slate-400">· Klaten & Bandung, ID</span>
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN: NEAT CIRCULAR FLOATING PHOTO & BADGES ── */}
                    <div className="lg:col-span-5 relative flex items-center justify-center">
                        {/* Central Circular Showcase Container */}
                        <div className="relative w-72 h-72 sm:w-84 sm:h-84 lg:w-96 lg:h-96 aspect-square flex items-center justify-center">
                            
                            {/* Ambient Glowing Halo behind the Circle */}
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-violet-600/35 via-pink-500/25 to-cyan-400/30 blur-2xl animate-pulse pointer-events-none"></div>

                            {/* Main Floating Circular Portrait Frame */}
                            <div className="animate-float-portrait w-full h-full relative p-2 sm:p-2.5 rounded-full bg-gradient-to-tr from-violet-600 via-pink-500 to-indigo-600 shadow-[0_15px_45px_-8px_rgba(124,58,237,0.45)] dark:shadow-[0_15px_45px_-8px_rgba(124,58,237,0.35)] group">
                                <div className="w-full h-full p-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
                                    <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-slate-900">
                                        <img
                                            src="/images/daffa.jpg"
                                            alt="Daffa Akhadi Yoga Perdana"
                                            className="w-full h-full object-cover object-[50%_37%] transition-transform duration-700 group-hover:scale-108"
                                            loading="eager"
                                        />
                                        {/* Subtle Vignette Ring */}
                                        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_24px_rgba(0,0,0,0.35)] pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge 1: Top Right (GPA 3.84) */}
                            <div className="hidden sm:flex absolute top-3 -right-3 sm:-right-8 lg:-right-10 card-float py-2 px-3.5 items-center gap-2.5 animate-float-gentle shadow-2xl z-20">
                                <div className="w-8 h-8 rounded-full bg-amber-500/15 dark:bg-amber-500/25 text-amber-500 flex items-center justify-center text-sm font-bold shadow-sm">
                                    ★
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 leading-none">Graduated With</p>
                                    <p className="text-xs font-extrabold text-slate-900 dark:text-white">GPA 3.84 / 4.00</p>
                                </div>
                            </div>

                            {/* Floating Badge 2: Top Left (CPO & StartUp) */}
                            <div className="hidden md:flex absolute top-3 -left-3 sm:-left-8 lg:-left-10 card-float py-2 px-3.5 items-center gap-2.5 animate-float-delayed shadow-xl z-20">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
                                </span>
                                <div className="text-left">
                                    <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 leading-none">Chief Product Officer</p>
                                    <p className="text-xs font-extrabold text-slate-800 dark:text-white">Ko+Lab & IdSpora</p>
                                </div>
                            </div>

                            {/* Floating Badge 3: Bottom Right (National Winner) */}
                            <div className="hidden sm:flex absolute bottom-8 -right-3 sm:-right-8 lg:-right-10 card-float py-2 px-3.5 items-center gap-2.5 animate-float-reverse shadow-2xl z-20">
                                <div className="w-8 h-8 rounded-full bg-violet-500/15 dark:bg-violet-500/25 text-violet-600 dark:text-violet-400 flex items-center justify-center text-sm font-bold shadow-sm">
                                    🏆
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 leading-none">Juara 1 Nasional</p>
                                    <p className="text-xs font-bold text-slate-900 dark:text-white">Video Competition IARMI</p>
                                </div>
                            </div>

                            {/* Floating Center Bottom Pill: Name & Role (Cleanly Centered With Zero Overlap) */}
                            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full card-float flex items-center gap-2.5 shadow-2xl z-20 whitespace-nowrap border border-white/80 dark:border-white/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-bold text-slate-900 dark:text-white">Daffa Akhadi Y.P.</span>
                                <span className="text-[10px] font-semibold text-violet-600 dark:text-violet-400">· D3 RPLA Telkom Univ</span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* ── KEY METRICS STRIP (STRICTLY FROM CV) ── */}
                <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="card-float p-5 text-left group">
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">3.84</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 font-bold">IPK</span>
                        </div>
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">D3 Rekayasa Perangkat Lunak</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Telkom University (2023-2026)</p>
                    </div>

                    <div className="card-float p-5 text-left group">
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">CPO</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 font-bold">StartUp</span>
                        </div>
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Ko+Lab & IdSpora Academy</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Backend Dev LMS & Product Lead</p>
                    </div>

                    <div className="card-float p-5 text-left group">
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">10+</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-bold">Events</span>
                        </div>
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">DigiHack & Digistar Club</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">20+ Univ Nasional & 150+ Peserta</p>
                    </div>

                    <div className="card-float p-5 text-left group">
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">4+</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-bold">Awards</span>
                        </div>
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Juara Nasional & Publikasi</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">IARMI, Hakordia, Jurnal JSIT, HKI</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
