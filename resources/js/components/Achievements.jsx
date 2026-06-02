import React from 'react';

const achievements = [
    {
        icon: '🎓',
        title: 'Student Ambassador',
        issuer: 'Faculty of Applied Sciences — Telkom University',
        year: '2023 — Present',
        type: 'Organization',
        desc: 'Dipercaya sebagai wajah dan representasi fakultas dalam kegiatan promosi, penerimaan mahasiswa baru, serta berbagai event internal dan eksternal.',
        current: true,
    },
    {
        icon: '🎬',
        title: 'Digistar Club Contributor',
        issuer: 'Digistar Club — Chapter Telkom University',
        year: '2023 — Present',
        type: 'Organization',
        desc: 'Aktif berkontribusi sebagai Video Editor dalam komunitas teknologi Digistar Club, memproduksi konten visual untuk berbagai kegiatan dan kampanye komunitas.',
        current: true,
    },
    {
        icon: '🖥️',
        title: 'UI/UX Designer — C-Learn',
        issuer: 'Chevalier Laboratory SAS',
        year: '2023',
        type: 'Project',
        desc: 'Merancang antarmuka dan pengalaman pengguna untuk platform e-learning C-Learn, mulai dari user research hingga prototype interaktif.',
        current: false,
    },
    {
        icon: '📜',
        title: 'Various Academic & Technology Certifications',
        issuer: 'Dicoding, Google, dan platform lainnya',
        year: '2022 — Present',
        type: 'Certification',
        desc: 'Menyelesaikan berbagai sertifikasi di bidang Android Development, UI/UX Design, Web Development, dan Artificial Intelligence dari platform pembelajaran terkemuka.',
        current: false,
    },
];

const typeColor = {
    Organization: 'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border-violet-200/50 dark:border-violet-800/40',
    Project: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-800/40',
    Certification: 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200/50 dark:border-amber-800/40',
};

export default function Achievements() {
    return (
        <section id="achievements" className="py-28">
            <div className="max-w-6xl mx-auto px-5 lg:px-8">

                {/* Header */}
                <div className="fade-up mb-14">
                    <p className="section-label mb-3">
                        <span className="w-4 h-px bg-gray-400 inline-block"></span>
                        Achievements
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Certifications & Awards
                    </h2>
                </div>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    {achievements.map((item, i) => (
                        <div
                            key={i}
                            className="fade-up card p-6 group"
                            style={{ transitionDelay: `${i * 0.08}s` }}
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                                    style={{ background: 'rgba(0,0,0,0.05)' }}>
                                    {item.icon}
                                </div>

                                <div className="flex-1 min-w-0">
                                    {/* Title row */}
                                    <div className="flex flex-wrap items-start gap-2 mb-1">
                                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        {item.current && (
                                            <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-200/50 dark:border-emerald-800/50 flex-shrink-0">
                                                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                                                Active
                                            </span>
                                        )}
                                    </div>

                                    {/* Meta */}
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.issuer}</p>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${typeColor[item.type] || typeColor.Certification}`}>
                                            {item.type}
                                        </span>
                                        <span className="text-xs text-gray-400 dark:text-gray-500">{item.year}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LinkedIn CTA */}
                <div className="fade-up card p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Lihat semua sertifikasi</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            Daftar lengkap tersedia di profil LinkedIn
                        </p>
                    </div>
                    <a
                        href="https://linkedin.com/in/daffaakhadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill btn-dark flex-shrink-0"
                    >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        View on LinkedIn
                    </a>
                </div>

            </div>
        </section>
    );
}
