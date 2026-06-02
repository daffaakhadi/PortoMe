import React, { useEffect, useState } from 'react';

const stats = [
    { value: '3+', label: 'Tahun Pengalaman Organisasi' },
    { value: '10+', label: 'Proyek Akademik & Personal' },
    { value: 'Creator', label: 'Content Creator & Video Editor' },
    { value: 'Designer', label: 'UI/UX Designer & Developer' },
];

export default function Hero() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
            <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-24 w-full">

                {/* ── MAIN HERO ── */}
                <div className="max-w-3xl mb-20">
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                            Open to opportunities · Bandung, Indonesia
                        </span>
                    </div>

                    {/* Name */}
                    <p className={`text-sm font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        Daffa Akhadi
                    </p>

                    {/* Headline */}
                    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        Building Digital Experiences Through{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10">Technology</span>
                            <span className="absolute -inset-1 -skew-x-2 rounded-lg bg-violet-100 dark:bg-violet-900/40 -z-0"></span>
                        </span>
                        {' '}and{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10">Creativity</span>
                            <span className="absolute -inset-1 -skew-x-2 rounded-lg bg-pink-100 dark:bg-pink-900/30 -z-0"></span>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className={`text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        Mahasiswa D3 Rekayasa Perangkat Lunak Aplikasi Telkom University yang berfokus pada{' '}
                        <strong className="text-gray-800 dark:text-gray-200 font-semibold">Software Development</strong>,{' '}
                        <strong className="text-gray-800 dark:text-gray-200 font-semibold">UI/UX Design</strong>,{' '}
                        <strong className="text-gray-800 dark:text-gray-200 font-semibold">Content Creation</strong>, dan{' '}
                        <strong className="text-gray-800 dark:text-gray-200 font-semibold">Digital Innovation</strong>.
                    </p>

                    {/* CTAs */}
                    <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <button
                            onClick={() => scrollTo('projects')}
                            className="btn-pill btn-dark"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                            </svg>
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollTo('contact')}
                            className="btn-pill btn-outline"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* ── STATS ── */}
                <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {stats.map((s, i) => (
                        <div key={i} className="card p-5 group hover:scale-[1.02] transition-transform duration-200">
                            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{s.value}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Scroll cue */}
                <button
                    onClick={() => scrollTo('about')}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30 hover:opacity-70 transition-opacity"
                >
                    <div className="w-4 h-7 rounded-full border border-gray-400 dark:border-gray-600 flex items-start justify-center pt-1.5">
                        <div className="w-0.5 h-1.5 rounded-full bg-gray-500 animate-bounce"></div>
                    </div>
                </button>
            </div>
        </section>
    );
}
