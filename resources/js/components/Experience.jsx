import React, { useState } from 'react';

const experiences = [
    {
        icon: '🎓',
        role: 'Student Ambassador & Content Creator',
        org: 'Faculty of Applied Sciences — Telkom University',
        period: '2023 — Present',
        type: 'Organization',
        desc: 'Membantu kegiatan kemahasiswaan, dokumentasi acara, branding fakultas, dan produksi konten media sosial. Berperan sebagai wajah fakultas dalam berbagai kegiatan promosi dan penerimaan mahasiswa baru.',
        tags: ['Content Creation', 'Branding', 'Social Media', 'Documentation'],
        current: true,
    },
    {
        icon: '🎬',
        role: 'Video Editor',
        org: 'Digistar Club — Chapter Telkom University',
        period: '2023 — Present',
        type: 'Organization',
        desc: 'Membuat video dokumentasi, teaser, aftermovie, dan konten promosi komunitas. Mengelola produksi konten visual mulai dari konsep hingga final render untuk keperluan media sosial dan event.',
        tags: ['Video Editing', 'After Movie', 'Adobe Premiere', 'Motion Graphics'],
        current: true,
    },
    {
        icon: '🖥️',
        role: 'C-Learn UI/UX Designer',
        org: 'Chevalier Laboratory SAS',
        period: '2023',
        type: 'Project',
        desc: 'Berkontribusi dalam desain antarmuka pengguna dan pengembangan pengalaman pengguna untuk proyek laboratorium. Melakukan riset pengguna, membuat wireframe, prototype, dan design system.',
        tags: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
        current: false,
    },
];

export default function Experience() {
    const [open, setOpen] = useState(0);

    return (
        <section id="experience" className="py-28">
            <div className="max-w-6xl mx-auto px-5 lg:px-8">

                {/* Header */}
                <div className="fade-up mb-14">
                    <p className="section-label mb-3">
                        <span className="w-4 h-px bg-gray-400 inline-block"></span>
                        Experience
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">My Journey</h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-black/15 via-black/8 to-transparent dark:from-white/15 dark:via-white/8 hidden sm:block"></div>

                    <div className="space-y-4">
                        {experiences.map((exp, i) => (
                            <div
                                key={i}
                                className="fade-up relative"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div className="sm:pl-14">
                                    {/* Timeline dot */}
                                    <div className="hidden sm:flex absolute left-0 top-5 w-[46px] items-center justify-center">
                                        <div className={`w-3 h-3 rounded-full border-2 ${exp.current ? 'bg-black dark:bg-white border-black dark:border-white' : 'bg-white dark:bg-gray-950 border-gray-400 dark:border-gray-600'}`}></div>
                                    </div>

                                    {/* Card */}
                                    <div
                                        className="card overflow-hidden cursor-pointer"
                                        onClick={() => setOpen(open === i ? null : i)}
                                    >
                                        <div className="flex items-center gap-4 p-5">
                                            {/* Icon */}
                                            <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                                                style={{ background: 'rgba(0,0,0,0.05)' }}>
                                                {exp.icon}
                                            </div>

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{exp.role}</span>
                                                    {exp.current && (
                                                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-200/50 dark:border-emerald-800/50">
                                                            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                                                            Active
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{exp.org}</p>
                                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{exp.period}</p>
                                            </div>

                                            {/* Type + chevron */}
                                            <div className="flex items-center gap-3 flex-shrink-0">
                                                <span className="hidden sm:block text-xs px-2.5 py-1 rounded-full card font-medium text-gray-500 dark:text-gray-400">
                                                    {exp.type}
                                                </span>
                                                <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Expanded */}
                                        <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-56' : 'max-h-0'}`}>
                                            <div className="px-5 pb-5 pt-1 border-t border-black/5 dark:border-white/5">
                                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 mt-3">
                                                    {exp.desc}
                                                </p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {exp.tags.map(t => (
                                                        <span key={t} className="text-xs px-2.5 py-1 rounded-full card font-medium text-gray-600 dark:text-gray-400">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
