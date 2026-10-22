import React from 'react';

const corePillars = [
    {
        icon: '⚙️',
        title: 'Backend & Web Development',
        desc: 'Membangun arsitektur backend andal, REST API, dan manajemen basis data. Berpengalaman mengembangkan Learning Management System (LMS) IdSpora Academy dan integrasi API sistem modern.',
        tag: 'PHP · Laravel · REST API · MySQL',
        badge: 'Technical Core',
    },
    {
        icon: '🎨',
        title: 'UI/UX & Product Design',
        desc: 'Mendesain antarmuka pengguna interaktif dan menguji kegunaan (usability) dengan metodologi NPS 50% di Chevalier Laboratory SAS. Menguasai Figma, wireframing, dan design system.',
        tag: 'Figma · Prototyping · NPS Analysis',
        badge: 'Design Thinking',
    },
    {
        icon: '🎬',
        title: 'Video Editing & Visual Content',
        desc: 'Memproduksi konten promosi komersial di PT Pabrik ACC Sukses (PACC x HurryUp Brand), aset kreatif Digistar Club Telkom Indonesia, dan meraih Juara 1 Nasional Video TikTok IARMI.',
        tag: 'Premiere Pro · CapCut · Storytelling',
        badge: 'Creative Production',
    },
    {
        icon: '🚀',
        title: 'Product Leadership & Startup',
        desc: 'Menjabat sebagai Chief Product Officer (C-Level) di Startup IdSpora (Ko+Lab Creative Hub), memimpin strategi produk, eksekusi 10+ konferensi dan relasi dengan C-Level mahasiswa.',
        tag: 'Product Strategy · Agile · Team Lead',
        badge: 'Strategic Vision',
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 lg:px-8">

                {/* Section Header */}
                <div className="fade-up mb-14 text-left">
                    <p className="section-label mb-2">
                        <span className="w-5 h-0.5 bg-violet-500 rounded-full inline-block"></span>
                        Tentang Saya & Pendidikan
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Profil & Latar Belakang Akademik
                    </h2>
                </div>

                {/* ── TOP SECTION: BIO & EDUCATION DUAL CARDS ── */}
                <div className="grid lg:grid-cols-12 gap-6 mb-12">
                    
                    {/* Bio Card (7 Cols) */}
                    <div className="fade-up lg:col-span-7 card-float p-7 flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-bold mb-4">
                                <span>✦ Ringkasan Profesional</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                                Perpaduan Logika Rekayasa Perangkat Lunak dan Kreativitas Visual
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                                Saya adalah Fresh Graduate dari program studi <strong className="text-slate-900 dark:text-white">D3 Rekayasa Perangkat Lunak Aplikasi Universitas Telkom</strong> dengan 
                                Indeks Prestasi Kumulatif (<strong className="text-violet-600 dark:text-violet-400">IPK 3.84 dari skala 4.00</strong>).
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                                Memiliki passion tinggi pada teknologi web, konten digital, dan media kreatif dengan pengalaman nyata di backend development, pembuatan konten, video editing, dan visual storytelling.
                                Terbukti aktif memimpin dan berkolaborasi dalam organisasi berskala nasional (Digistar Club by Telkom Indonesia), kepemimpinan startup (CPO IdSpora), serta kepanitiaan hackathon 20+ kampus.
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                                Pembelajar cepat dengan <em>growth mindset</em> yang siap berkontribusi secara adaptif dan profesional dalam lingkungan kerja yang dinamis.
                            </p>
                        </div>

                        {/* Quick location & address snippet */}
                        <div className="mt-6 pt-5 border-t border-slate-200/70 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1.5 font-medium">
                                <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Klaten, Jawa Tengah & Bandung, Jawa Barat
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 font-semibold text-slate-700 dark:text-slate-300">
                                Angkatan 2023 - Lulus 2026
                            </span>
                        </div>
                    </div>

                    {/* Education Card (5 Cols) */}
                    <div className="fade-up lg:col-span-5 card-float p-7 relative overflow-hidden flex flex-col justify-between border-violet-500/20">
                        {/* Decorative background glow */}
                        <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-violet-500/15 via-pink-500/10 to-transparent rounded-bl-full pointer-events-none"></div>

                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                    Jenjang Pendidikan Resmi
                                </span>
                                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                                    GPA 3.84 / 4.00
                                </span>
                            </div>

                            <div className="flex items-start gap-3.5 mb-5">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-md flex-shrink-0">
                                    TU
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                                        Universitas Telkom
                                    </h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                        Bandung, West Java Regency · Sep 2023 - Jul 2026
                                    </p>
                                    <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 mt-1">
                                        Diploma in Software Engineering Application (D3 RPLA)
                                    </p>
                                </div>
                            </div>

                            {/* Academic Responsibilities & Roles */}
                            <div className="space-y-3 pt-4 border-t border-slate-200/70 dark:border-white/10">
                                <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                            Asisten Praktikum (User Experience Course)
                                        </p>
                                    </div>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-4">
                                        Membimbing mahasiswa pada mata kuliah User Experience Tahun Ajaran 2025/2026 dalam perancangan antarmuka & riset pengguna.
                                    </p>
                                </div>

                                <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                            Student Ambassador Fakultas Ilmu Terapan
                                        </p>
                                    </div>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-4">
                                        Duta resmi Fakultas Ilmu Terapan (FIT) Telkom University dalam branding publik, promosi acara, dan komunikasi ke publik.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 text-[11px] text-slate-400 dark:text-slate-500 italic text-right">
                            Fakultas Ilmu Terapan — Telkom University
                        </div>
                    </div>

                </div>

                {/* ── CORE PILLARS GRID ── */}
                <div className="fade-up">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            Pilar Kompetensi Utama
                        </h3>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                            Berdasarkan Track Record Proyek & Karier
                        </span>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {corePillars.map((p, idx) => (
                            <div
                                key={idx}
                                className="card-float p-5 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl p-2 rounded-xl bg-slate-100 dark:bg-white/[0.06] inline-block">
                                            {p.icon}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
                                            {p.badge}
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        {p.title}
                                    </h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {p.desc}
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/5">
                                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                                        {p.tag}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
