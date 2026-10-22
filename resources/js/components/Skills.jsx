import React, { useState, useEffect, useRef } from 'react';

const skillCategories = [
    {
        title: 'Rekayasa Perangkat Lunak & Web',
        icon: '💻',
        badge: 'Engineering',
        skills: [
            { name: 'PHP & Laravel Framework', level: 'Advanced', pct: 88, note: 'Backend LMS & REST API Architecture' },
            { name: 'REST API & Web Services', level: 'Advanced', pct: 86, note: 'JSON, Autentikasi JWT, Endpoint Optimization' },
            { name: 'MySQL & Database Modeling', level: 'Proficient', pct: 82, note: 'Relational Schema, Query Optimization' },
            { name: 'Kotlin & Android App Dev', level: 'Proficient', pct: 78, note: 'Jetpack Compose, Room Database' },
            { name: 'Git & Version Control Workflow', level: 'Proficient', pct: 85, note: 'Branching, Collaboration, GitHub CI/CD' },
        ],
    },
    {
        title: 'UI/UX Design & User Research',
        icon: '🎨',
        badge: 'Product Design',
        skills: [
            { name: 'Figma UI/UX & Prototyping', level: 'Advanced', pct: 90, note: 'Design System, High-fidelity Wireframing' },
            { name: 'User Experience Research & NPS', level: 'Advanced', pct: 85, note: 'Usability Testing, Net Promoter Score 50%' },
            { name: 'Interactive Micro-Animations', level: 'Proficient', pct: 80, note: 'Component Interactions & Transitions' },
            { name: 'Information Architecture', level: 'Proficient', pct: 82, note: 'User Flow, Task Flow, Sitemapping' },
            { name: 'Asisten Praktikum UX', level: 'Verified', pct: 92, note: 'Telkom University Academic Year 25/26' },
        ],
    },
    {
        title: 'Creative Video & Storytelling',
        icon: '🎬',
        badge: 'Visual Media',
        skills: [
            { name: 'Adobe Premiere Pro & Video Editing', level: 'Advanced', pct: 92, note: 'Commercial Campaign PACC & Aftermovies' },
            { name: 'CapCut & Short-form Content', level: 'Advanced', pct: 94, note: 'TikTok & Reels Viral Formats (Juara 1 IARMI)' },
            { name: 'Direction & Visual Storytelling', level: 'Advanced', pct: 88, note: 'Youth Economic Summit Direction Maker' },
            { name: 'Motion Graphic & Brand Assets', level: 'Proficient', pct: 78, note: 'Event Teaser, Typography & Lower Thirds' },
            { name: 'Creative Media Management', level: 'Advanced', pct: 88, note: 'Digistar Club by Telkom Indonesia Standard' },
        ],
    },
];

const certifications = [
    {
        title: 'Badan Ekraf Digital Talent 2026',
        issuer: 'Kementerian Ekonomi Kreatif / Bekraf RI',
        year: '2026',
        type: 'Pemerintah / Nasional',
        desc: 'Program akselerasi talenta digital ekonomi kreatif yang diselenggarakan oleh Kementerian Ekonomi Kreatif Republik Indonesia.',
    },
    {
        title: 'Deployment Revolution: Build Websites with AI Assist & EdgeOne',
        issuer: 'CODEPOLITAN Online Class Program',
        year: '2026',
        type: 'Technical & AI Deployment',
        desc: 'Pelatihan pembuatan website modern berbantuan kecerdasan buatan (AI) serta instant + secure deployment via platform EdgeOne.',
    },
    {
        title: 'Agile Scrum Fundamentals',
        issuer: 'Professional Agile Training',
        year: '2025',
        type: 'Product Methodology',
        desc: 'Sertifikasi pemahaman fundamental metodologi Agile Scrum untuk manajemen sprint, backlog, dan pengembangan perangkat lunak adaptif.',
    },
    {
        title: 'DIGICOURSE #2: THINK SOLVE PITCH WIN',
        issuer: 'Student Club BILA',
        year: '2026',
        type: 'Business Case & Presentation',
        desc: 'Mastering business case competitions: menstrukturkan solusi masalah bisnis kompleks, confident pitch, dan presentasi bahasa Inggris tingkat nasional/internasional.',
    },
    {
        title: 'DigiCamp Vol.1 Summit Day & Digistar Summit 2026',
        issuer: 'Telkom Indonesia & Digistar Club',
        year: '2026',
        type: 'Leadership & Marketing',
        desc: 'Pelatihan intensif "Crack the Business Code as Marcom" dan konferensi nasional "One Compass, Endless Paths".',
    },
];

export default function Skills() {
    const [animated, setAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) setAnimated(true);
            },
            { threshold: 0.15 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section id="skills" ref={ref} className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 lg:px-8">

                {/* Section Header */}
                <div className="fade-up mb-14 text-left">
                    <p className="section-label mb-2">
                        <span className="w-5 h-0.5 bg-violet-500 rounded-full inline-block"></span>
                        Keahlian & Pelatihan
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Kompetensi Teknis & Sertifikasi Resmi
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
                        Keahlian teruji di bidang Software Engineering, Desain Pengalaman Pengguna (UI/UX), dan Produksi Media Kreatif.
                    </p>
                </div>

                {/* ── 3 CATEGORY SKILL BARS ── */}
                <div className="grid lg:grid-cols-3 gap-6 mb-12">
                    {skillCategories.map((cat, cIdx) => (
                        <div
                            key={cat.title}
                            className="fade-up card-float p-6 flex flex-col justify-between"
                            style={{ transitionDelay: `${cIdx * 0.1}s` }}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl p-2 rounded-xl bg-violet-100 dark:bg-white/[0.08] inline-block">
                                            {cat.icon}
                                        </span>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                                                {cat.title}
                                            </h3>
                                            <span className="text-[10px] font-bold uppercase text-violet-600 dark:text-violet-400">
                                                {cat.badge}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Skills Progress */}
                                <div className="space-y-4">
                                    {cat.skills.map((s) => (
                                        <div key={s.name}>
                                            <div className="flex justify-between items-baseline mb-1">
                                                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                                    {s.name}
                                                </span>
                                                <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
                                                    {s.pct}%
                                                </span>
                                            </div>
                                            <div className="h-2 rounded-full overflow-hidden bg-slate-200/70 dark:bg-white/[0.08]">
                                                <div
                                                    className="skill-bar h-full rounded-full"
                                                    style={{
                                                        width: animated ? `${s.pct}%` : '0%',
                                                        background: 'linear-gradient(90deg, #7c3aed 0%, #db2777 100%)',
                                                    }}
                                                />
                                            </div>
                                            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                                                {s.note}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── OFFICIAL MODULES & CERTIFICATIONS ── */}
                <div className="fade-up mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                Modul, Sertifikasi & Program Resmi (CV)
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                Program pengembangan talenta dari Kementerian RI, Industri & Komunitas
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certifications.map((cert, idx) => (
                            <div
                                key={idx}
                                className="card-float p-5 flex flex-col justify-between group hover:border-violet-500/40"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300">
                                            {cert.type}
                                        </span>
                                        <span className="text-xs font-mono font-bold text-slate-400">
                                            {cert.year}
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        {cert.title}
                                    </h4>
                                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {cert.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── ALL TOOLS CLOUD ── */}
                <div className="fade-up card-float p-6 text-left">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                        Perangkat Lunak, Bahasa & Ekosistem yang Dikuasai
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Laravel 11/12/13', 'PHP 8.3', 'RESTful API', 'MySQL', 'Kotlin', 'Jetpack Compose',
                            'Room Database', 'Git & GitHub', 'Postman', 'Python', 'Face Recognition AI',
                            'Figma', 'UI/UX Design', 'User Research', 'NPS Usability', 'Design System',
                            'Adobe Premiere Pro', 'CapCut Pro', 'Motion Graphics', 'Short-form Video',
                            'Agile Scrum', 'Product Management', 'Public Speaking & Storytelling', 'EdgeOne Cloud'
                        ].map((item) => (
                            <span
                                key={item}
                                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 transition-colors cursor-default"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
