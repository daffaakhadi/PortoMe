import React, { useState } from 'react';

const cats = ['All', 'Android Development', 'Web Development', 'UI/UX Design', 'REST API', 'Academic'];

const projects = [
    {
        title: 'Egg Ordering Application',
        cats: ['Android Development', 'REST API', 'Academic'],
        desc: 'Aplikasi Android pemesanan telur menggunakan Jetpack Compose, Room Database, dan integrasi REST API. Menampilkan katalog produk, keranjang belanja, dan riwayat pesanan.',
        gradient: 'from-amber-400/80 to-orange-500/80',
        tech: ['Kotlin', 'Jetpack Compose', 'Room DB', 'REST API'],
        github: '#',
        demo: null,
        featured: true,
    },
    {
        title: 'Laundry Go',
        cats: ['Web Development', 'Academic'],
        desc: 'Website manajemen laundry berbasis Laravel dengan fitur pencatatan order, tracking status laundry, manajemen pelanggan, dan laporan keuangan.',
        gradient: 'from-blue-400/80 to-indigo-500/80',
        tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'PHP'],
        github: '#',
        demo: '#',
        featured: true,
    },
    {
        title: 'Educational AR Application',
        cats: ['Android Development', 'Academic'],
        desc: 'Aplikasi pembelajaran bangun ruang berbasis Augmented Reality untuk siswa SD/SMP. Menampilkan objek 3D interaktif dengan informasi edukatif melalui kamera smartphone.',
        gradient: 'from-violet-400/80 to-purple-600/80',
        tech: ['Unity', 'AR Foundation', 'Vuforia', 'C#'],
        github: '#',
        demo: null,
        featured: true,
    },
    {
        title: 'Animal Data Management System',
        cats: ['Android Development', 'REST API', 'Academic'],
        desc: 'Aplikasi Android untuk manajemen data hewan dengan integrasi API eksternal dan sistem autentikasi pengguna berbasis token JWT.',
        gradient: 'from-emerald-400/80 to-teal-500/80',
        tech: ['Kotlin', 'Retrofit', 'JWT Auth', 'MVVM'],
        github: '#',
        demo: null,
        featured: false,
    },
    {
        title: 'C-Learn Platform UI/UX',
        cats: ['UI/UX Design'],
        desc: 'Desain UI/UX lengkap untuk platform e-learning C-Learn milik Chevalier Laboratory. Meliputi user research, wireframe, prototype interaktif, dan design system.',
        gradient: 'from-pink-400/80 to-rose-500/80',
        tech: ['Figma', 'User Research', 'Design System', 'Prototyping'],
        github: null,
        demo: '#',
        featured: false,
    },
    {
        title: 'Faculty Branding Assets',
        cats: ['UI/UX Design'],
        desc: 'Pembuatan aset visual dan branding untuk Fakultas Ilmu Terapan Telkom University, termasuk template konten media sosial, poster, dan banner digital.',
        gradient: 'from-cyan-400/80 to-sky-500/80',
        tech: ['Figma', 'Adobe Premiere', 'Canva', 'Motion Graphics'],
        github: null,
        demo: '#',
        featured: false,
    },
];

const catShort = {
    'Android Development': 'Android',
    'Web Development': 'Web',
    'UI/UX Design': 'Design',
    'REST API': 'API',
    'Academic': 'Academic',
    'All': 'All',
};

export default function Projects() {
    const [cat, setCat] = useState('All');

    const filtered = cat === 'All'
        ? projects
        : projects.filter(p => p.cats.includes(cat));

    return (
        <section id="projects" className="py-28">
            <div className="max-w-6xl mx-auto px-5 lg:px-8">

                {/* Header */}
                <div className="fade-up mb-10">
                    <p className="section-label mb-3">
                        <span className="w-4 h-px bg-gray-400 inline-block"></span>
                        Projects
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Featured Projects</h2>
                </div>

                {/* Filter pills */}
                <div className="fade-up flex flex-wrap gap-2 mb-10">
                    {cats.map(c => (
                        <button
                            key={c}
                            onClick={() => setCat(c)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                cat === c
                                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm'
                                    : 'card text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                            }`}
                        >
                            {catShort[c]}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filtered.map((p, i) => (
                        <div
                            key={p.title}
                            className="fade-up card overflow-hidden group flex flex-col"
                            style={{ transitionDelay: `${i * 0.07}s` }}
                        >
                            {/* Thumbnail */}
                            <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden flex-shrink-0`}>
                                {p.featured && (
                                    <span className="absolute top-3 left-3 z-10 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white border border-white/20">
                                        ✦ Featured
                                    </span>
                                )}

                                {/* Category chips */}
                                <div className="absolute top-3 right-3 z-10 flex flex-wrap gap-1 justify-end">
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-white">
                                        {p.cats[0]}
                                    </span>
                                </div>

                                {/* Big letter watermark */}
                                <span className="absolute bottom-2 right-4 text-7xl font-black text-white/12 select-none leading-none">
                                    {p.title[0]}
                                </span>

                                {/* Decorative circles */}
                                <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/10"></div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center gap-3">
                                    {p.github && (
                                        <a href={p.github} target="_blank" rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/35 transition-colors">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}
                                    {p.demo && (
                                        <a href={p.demo} target="_blank" rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/35 transition-colors">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
                                    {p.desc}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {p.tech.map(t => (
                                        <span key={t} className="text-xs px-2.5 py-1 rounded-full card font-medium text-gray-600 dark:text-gray-400">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="fade-up flex justify-center mt-10">
                    <a href="https://github.com/daffaakhadi" target="_blank" rel="noopener noreferrer"
                        className="btn-pill btn-outline">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View All Projects on GitHub
                    </a>
                </div>

            </div>
        </section>
    );
}
