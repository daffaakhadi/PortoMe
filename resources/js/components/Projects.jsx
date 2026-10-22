import React, { useState } from 'react';

const categories = [
    { id: 'all', label: 'Semua Portofolio' },
    { id: 'web', label: 'Web & Backend' },
    { id: 'hki', label: 'HKI & Jurnal Riset' },
    { id: 'design', label: 'UI/UX & Desain' },
    { id: 'media', label: 'Video & Kampanye Kreatif' },
];

const projectList = [
    {
        title: 'Website Learning Management System (LMS) IdSpora Academy',
        year: '2025',
        category: 'web',
        tag: 'Web & Backend',
        badge: 'Startup Flagship',
        desc: 'Platform pembelajaran digital terintegrasi yang dikembangkan untuk IdSpora Academy (Ko+Lab Creative Hub). Bertindak sebagai Backend Developer merancang REST API, sistem otentikasi peran, manajemen kelas interaktif, dan basis data pembelajaran.',
        tech: ['Laravel', 'PHP', 'REST API', 'MySQL', 'Tailwind CSS'],
        gradient: 'from-violet-600 to-indigo-700',
        featured: true,
        stats: 'Digunakan oleh 100+ Peserta',
    },
    {
        title: 'HKI: Presensi Digital Berbasis Face Recognition SMKN 2 Garut',
        year: '2025',
        category: 'hki',
        tag: 'Hak Kekayaan Intelektual',
        badge: 'Pengabdian Masyarakat',
        desc: 'Karya terdaftar Hak Kekayaan Intelektual (HKI) hasil program Pengabdian Masyarakat untuk SMKN 2 Garut. Mengimplementasikan teknologi pengenalan wajah cerdas untuk otomatisasi absensi siswa dan staf secara presisi dan nirsentuh.',
        tech: ['Computer Vision', 'Face Recognition', 'Python', 'Web App', 'HKI Resmi'],
        gradient: 'from-blue-600 to-cyan-600',
        featured: true,
        stats: 'Sertifikat HKI Resmi Kemenkumham',
    },
    {
        title: 'Jurnal JSIT 2025: Gim 2D Desktop Anak PAUD & TK Sadewa Yogyakarta',
        year: '2025',
        category: 'hki',
        tag: 'Publikasi Ilmiah',
        badge: 'Jurnal Sains Informatika Terapan',
        desc: 'Publikasi ilmiah pada Jurnal Sains Informatika Terapan (JSIT) tahun 2025 berjudul "Digitalisasi Aplikasi Gim 2D Berbasis Desktop Bagi Anak PAUD Dan TK Di TK Sadewa Yogyakarta" yang mengkombinasikan pedagogi anak usia dini dengan rekayasa perangkat lunak.',
        tech: ['2D Game Engine', 'Desktop App', 'Educational UI', 'Academic Research'],
        gradient: 'from-emerald-600 to-teal-700',
        featured: true,
        stats: 'Diterbitkan di JSIT 2025',
    },
    {
        title: 'HKI: Sistem Informasi Manajemen Sekolah & Perkembangan Anak',
        year: '2025',
        category: 'hki',
        tag: 'Hak Kekayaan Intelektual',
        badge: 'Sistem Informasi',
        desc: 'Karya Cipta HKI terdaftar berjudul "Sistem Informasi Manajemen Sekolah Berbasis Teknologi dan Perkembangan Anak", menyediakan solusi digital untuk monitoring komprehensif data akademik dan psikososial peserta didik.',
        tech: ['Database Architecture', 'Management System', 'Analytics', 'HKI Kemenkumham'],
        gradient: 'from-purple-600 to-pink-600',
        featured: false,
        stats: 'HKI Terdaftar 2025',
    },
    {
        title: 'Media Creative DigiHack 2025: "AI for Social Impact"',
        year: '2025',
        category: 'media',
        tag: 'Hackathon Nasional',
        badge: 'Digistar Telkom Indonesia',
        desc: 'Kampanye media kreatif dan kepanitiaan komunikasi pada kompetisi hackathon nasional DigiHack 2025 yang diselenggarakan Digistar Club by Telkom Indonesia, mengangkat tema AI for Social Impact dan diikuti oleh 20+ Universitas Nasional.',
        tech: ['Creative Direction', 'Hackathon Branding', 'Motion Graphics', 'Social Media Campaign'],
        gradient: 'from-rose-600 to-orange-600',
        featured: false,
        stats: '20+ Universitas Nasional',
    },
    {
        title: 'Platform UI/UX C-Learn (Chevalier Laboratory SAS)',
        year: '2025',
        category: 'design',
        tag: 'UI/UX Design',
        badge: 'NPS 50% Achieved',
        desc: 'Perancangan antarmuka dan pengalaman pengguna platform e-learning C-Learn melalui riset komprehensif kebutuhan pengguna. Berhasil meraih skor Net Promoter Score (NPS) sebesar 50% setelah serangkaian usability test.',
        tech: ['Figma', 'User Research', 'Design System', 'Prototyping', 'NPS Usability'],
        gradient: 'from-fuchsia-600 to-pink-700',
        featured: false,
        stats: '50% Net Promoter Score',
    },
    {
        title: 'Produksi Video Promosi Komersial PACC x HurryUp Brand',
        year: '2026',
        category: 'media',
        tag: 'Video Production',
        badge: 'Commercial Campaign',
        desc: 'Produksi dan penyuntingan video promosi terarah untuk kolaborasi antara ritel gadget PT Pabrik ACC Sukses dengan brand HurryUp, dipublikasikan pada kanal media sosial dan display toko ritel di DIY & Jateng.',
        tech: ['Adobe Premiere Pro', 'Sound Design', 'Color Grading', 'Commercial Storytelling'],
        gradient: 'from-amber-600 to-rose-600',
        featured: false,
        stats: 'Retail Stores in DIY & Jateng',
    },
    {
        title: 'Digistar Connect Goes to ITB: Digital Campaign & Branding',
        year: '2026',
        category: 'media',
        tag: 'Event Campaign',
        badge: '90% Attendance Rate',
        desc: 'Strategi promosi multi-channel (feeds, reels instagram, dan blast komunikasi komunitas) untuk acara "Your Roadmap to Building Your Professional Profile and Kickstarting Your Career", menjaring 100+ peserta dengan kehadiran fisik 90%.',
        tech: ['Campaign Strategy', 'Instagram Reels', 'Copywriting', 'Public Engagement'],
        gradient: 'from-sky-600 to-indigo-700',
        featured: false,
        stats: '100+ Peserta · 90% Hadir',
    },
];

export default function Projects() {
    const [selectedCat, setSelectedCat] = useState('all');

    const filtered = selectedCat === 'all'
        ? projectList
        : projectList.filter(p => p.category === selectedCat);

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 lg:px-8">

                {/* Section Header */}
                <div className="fade-up mb-12 text-left">
                    <p className="section-label mb-2">
                        <span className="w-5 h-0.5 bg-violet-500 rounded-full inline-block"></span>
                        Karya & Riset Terpilih
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                Proyek, HKI Resmi & Publikasi Ilmiah
                            </h2>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
                                Kumpulan hasil karya rekayasa software, hak cipta terdaftar Kemenkumham, publikasi jurnal, serta kampanye kreatif berskala nasional.
                            </p>
                        </div>

                        {/* Category filter pills */}
                        <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-slate-200/60 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 self-start md:self-auto">
                            {categories.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => setSelectedCat(c.id)}
                                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                        selectedCat === c.id
                                            ? 'bg-white dark:bg-violet-600 text-slate-900 dark:text-white shadow-sm scale-[1.02]'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    {c.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((p, idx) => (
                        <div
                            key={p.title}
                            className="fade-up card-float overflow-hidden flex flex-col justify-between group"
                            style={{ transitionDelay: `${idx * 0.05}s` }}
                        >
                            {/* Card Top Banner / Visual Header */}
                            <div>
                                <div className={`relative h-44 bg-gradient-to-tr ${p.gradient} p-5 flex flex-col justify-between overflow-hidden`}>
                                    {/* Subtle pattern & ambient glow */}
                                    <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                                    <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/15 blur-lg"></div>

                                    {/* Header tags */}
                                    <div className="relative z-10 flex items-center justify-between gap-2">
                                        <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                                            {p.badge}
                                        </span>
                                        <span className="text-xs font-mono font-bold text-white/90 bg-white/15 backdrop-blur-md px-2 py-0.5 rounded-md">
                                            {p.year}
                                        </span>
                                    </div>

                                    {/* Bottom banner text / watermark */}
                                    <div className="relative z-10">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                                            {p.tag}
                                        </span>
                                        <p className="text-xs text-white/95 font-semibold flex items-center gap-1.5 mt-0.5">
                                            <span>★</span> {p.stats}
                                        </p>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-6">
                                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2.5 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        {p.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-4">
                                        {p.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Tech Stack Footer */}
                            <div className="px-6 pb-6 pt-2">
                                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60 dark:border-white/10">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Callout / GitHub Link */}
                <div className="fade-up mt-12 card-float p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 text-left">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center font-bold text-lg flex-shrink-0">
                            GH
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                                Ingin melihat repositori dan dokumentasi teknis?
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                Jelajahi repositori kode sumber dan kontribusi saya di GitHub.
                            </p>
                        </div>
                    </div>
                    <a
                        href="https://github.com/daffaakhadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill btn-dark text-xs py-2.5 px-5 flex-shrink-0"
                    >
                        <span>Kunjungi github.com/daffaakhadi</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}
