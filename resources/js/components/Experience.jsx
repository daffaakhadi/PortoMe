import React, { useState } from 'react';

const experiences = [
    // ── WORK EXPERIENCE ──
    {
        category: 'work',
        company: 'PT Pabrik Acc Sukses (PACC)',
        location: 'Daerah Istimewa Yogyakarta',
        role: 'Video Editor',
        period: 'Oct 2026 — Sekarang',
        current: true,
        icon: '🎬',
        type: 'Work Experience',
        summary: 'Perusahaan ritel aksesori gadget dan elektronik konsumen dengan berbagai cabang di Yogyakarta, Solo, Magelang, serta ekspansi daring.',
        bullets: [
            'Berkolaborasi erat bersama tim kreatif dan marketing guna memastikan setiap video promosi selaras dengan brand guidelines dan target kampanye.',
            'Memproduksi dan mengedit video promosi untuk proyek kolaborasi resmi antara PT Pabrik ACC Sukses dan HurryUp Brand.',
        ],
        skills: ['Video Production', 'Adobe Premiere Pro', 'Campaign Video', 'Brand Collaboration'],
    },
    {
        category: 'work',
        company: 'ShopeePay Indonesia',
        location: 'Nasional / Lingkungan Kampus',
        role: 'SPARK Agents',
        period: 'Aug 2026 — Sekarang',
        current: true,
        icon: '💳',
        type: 'Work Experience',
        summary: 'Program perwakilan resmi ShopeePay untuk mendorong literasi dan adopsi pembayaran digital serta transaksi nontunai di kalangan mahasiswa.',
        bullets: [
            'Mengedukasi mahasiswa dan komunitas kampus seputar inklusi keuangan digital serta pemanfaatan transaksi nontunai yang aman dan bijak.',
            'Memperkenalkan dan mempromosikan fitur-fitur baru serta keuntungan ekosistem ShopeePay ke komunitas terdekat.',
            'Mendorong akuisisi pengguna baru ShopeePay melalui optimalisasi kode referral.',
        ],
        skills: ['Financial Literacy', 'Digital Payment', 'Community Education', 'Referral Strategy'],
    },
    {
        category: 'work',
        company: 'Ko+Lab Creative Hub (StartUp IdSpora)',
        location: 'Bandung, Indonesia',
        role: 'Chief Product Officer (CPO) & Backend Developer',
        period: 'Aug 2025 — Jun 2026',
        current: false,
        icon: '🚀',
        type: 'Startup C-Level',
        summary: 'Ekosistem kreatif mahasiswa dan startup digital IdSpora yang berfokus pada pengembangan produk pembelajaran dan pemberdayaan generasi muda.',
        bullets: [
            'Menyusun strategi produk bisnis dan mengakuisisi klien untuk bermitra dengan jajaran C-Level mahasiswa.',
            'Merencanakan dan mengeksekusi lebih dari 10+ konferensi dan acara berskala besar yang melibatkan dewan CEO.',
            'Mengembangkan Learning Management System (LMS) IdSpora Academy sebagai Backend Developer.',
        ],
        skills: ['Product Management', 'Backend Development', 'Business Strategy', 'Conference Organization', 'LMS Architecture'],
    },

    // ── ORGANIZATIONAL EXPERIENCE ──
    {
        category: 'org',
        company: 'Digistar Club by Telkom Indonesia',
        location: 'Jakarta, Indonesia',
        role: 'Creative Media',
        period: 'Feb 2026 — Sekarang',
        current: true,
        icon: '📡',
        type: 'BUMN Community',
        summary: 'Komunitas resmi Living in Telkom yang mewadahi ribuan alumni program Telkom Indonesia (Digistar Class, Digistar Connect, Digistar Internship).',
        bullets: [
            'Menetapkan standar visual resmi untuk seluruh konten media sosial Digistar Club.',
            'Membuat aset desain grafis dan video berkualitas tinggi sebagai materi utama pembuatan konten.',
            'Mengarahkan tim Campus Chapter Rangers di berbagai universitas dalam produksi desain grafis dan video.',
            'Membuat konten organik untuk tim Marketing Communication & Student Club berdasarkan content brief yang dievaluasi Content Specialist.',
            'Memberikan evaluasi, supervisi teknis, dan saran pada konten yang diproduksi Rangers sebelum diajukan ke tim Marcom pusat.',
        ],
        skills: ['Creative Direction', 'Graphic Design', 'Video Asset Creation', 'Brand Guidelines', 'Team Mentoring'],
    },
    {
        category: 'org',
        company: 'Chevalier Laboratory SAS Telkom University',
        location: 'Bandung, Indonesia',
        role: 'C-Learn UI/UX Designer',
        period: 'Nov 2024 — Jun 2025',
        current: false,
        icon: '🧪',
        type: 'Laboratory Study Group',
        summary: 'Program kelompok studi intensif selama 6 bulan untuk mengasah kemampuan teknologi dan rekayasa antarmuka di Telkom University.',
        bullets: [
            'Menjadi mentee intensif dalam penguasaan perangkat lunak desain industri Figma.',
            'Mengembangkan rancangan produk digital yang berakar pada kebutuhan nyata pengguna (User Needs).',
            'Menganalisis performa User Interface menggunakan metrik Net Promoter Score (NPS) dengan capaian skor 50%.',
        ],
        skills: ['Figma', 'UI/UX Design', 'NPS Usability Analysis', 'User Research', 'Design Systems'],
    },
    {
        category: 'org',
        company: 'Digistar Club Campus Chapter Telkom University',
        location: 'Bandung, Jawa Barat',
        role: 'Marketing Communication (Marcom)',
        period: 'Sep 2024 — Dec 2025',
        current: false,
        icon: '🏛️',
        type: 'Campus Chapter',
        summary: 'Cabang universitas komunitas Digistar Telkom Indonesia dalam memajukan talenta digital di lingkungan kampus.',
        bullets: [
            'Menjabat sebagai anggota komite Rangers Digistar Club Chapter Telkom University 2024.',
            'Berperan sebagai komite Marketing Communication pada kompetisi bergengsi tingkat nasional "DigiHack 2025" yang diikuti 20+ Universitas Nasional.',
            'Mendokumentasikan 10+ event dengan memproduksi video recap yang melibatkan total 150+ peserta aktif.',
        ],
        skills: ['Event Documentation', 'DigiHack Hackathon', 'Public Relations', 'Community Engagement'],
    },
    {
        category: 'org',
        company: 'Student Ambassador Fakultas Ilmu Terapan (FIT) Telkom University',
        location: 'Bandung, Jawa Barat',
        role: 'Content Creator',
        period: 'Mar 2024 — Mar 2026',
        current: false,
        icon: '🌟',
        type: 'Faculty Ambassadorship',
        summary: 'Organisasi resmi kemahasiswaan FIT Telkom University untuk pengembangan bakat, penalaran, promosi penerimaan mahasiswa, dan publikasi prestasi.',
        bullets: [
            'Bertindak sebagai Content Creator utama untuk badan kemahasiswaan Fakultas Ilmu Terapan.',
            'Bertanggung jawab penuh atas dokumentasi dan penyuntingan video pada seluruh kegiatan resmi fakultas.',
            'Meningkatkan pertumbuhan pengikut Instagram fakultas secara organik hingga 200+ followers baru.',
        ],
        skills: ['Social Media Growth', 'Event Video Editing', 'Faculty Branding', 'Visual Storytelling'],
    },
];

export default function Experience() {
    const [filter, setFilter] = useState('all');
    const [openIdx, setOpenIdx] = useState(0);

    const filtered = filter === 'all'
        ? experiences
        : experiences.filter(e => e.category === filter);

    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-5 lg:px-8">

                {/* Section Header */}
                <div className="fade-up mb-12 text-left">
                    <p className="section-label mb-2">
                        <span className="w-5 h-0.5 bg-violet-500 rounded-full inline-block"></span>
                        Pengalaman & Perjalanan Karier
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            Rekam Jejak Profesional & Organisasi
                        </h2>

                        {/* Filter Tabs */}
                        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-200/60 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10">
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    filter === 'all'
                                        ? 'bg-white dark:bg-violet-600 text-slate-900 dark:text-white shadow-sm'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                Semua ({experiences.length})
                            </button>
                            <button
                                onClick={() => setFilter('work')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    filter === 'work'
                                        ? 'bg-white dark:bg-violet-600 text-slate-900 dark:text-white shadow-sm'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                Pengalaman Kerja ({experiences.filter(e => e.category === 'work').length})
                            </button>
                            <button
                                onClick={() => setFilter('org')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    filter === 'org'
                                        ? 'bg-white dark:bg-violet-600 text-slate-900 dark:text-white shadow-sm'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                Organisasi ({experiences.filter(e => e.category === 'org').length})
                            </button>
                        </div>
                    </div>
                </div>

                {/* Timeline / Card List */}
                <div className="space-y-4">
                    {filtered.map((item, index) => {
                        const isOpen = openIdx === index;
                        return (
                            <div
                                key={item.company + item.role}
                                className="fade-up card-float overflow-hidden transition-all duration-300"
                                style={{ transitionDelay: `${index * 0.05}s` }}
                            >
                                {/* Header / Collapsed bar */}
                                <div
                                    onClick={() => setOpenIdx(isOpen ? null : index)}
                                    className="p-5 sm:p-6 cursor-pointer flex items-start sm:items-center justify-between gap-4 select-none hover:bg-black/[0.01] dark:hover:bg-white/[0.02]"
                                >
                                    <div className="flex items-start sm:items-center gap-4 min-w-0">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600/10 via-indigo-600/10 to-pink-500/10 border border-violet-500/20 text-2xl flex items-center justify-center flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                                                    {item.role}
                                                </h3>
                                                {item.current && (
                                                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/50">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                        Aktif / Sedang Berjalan
                                                    </span>
                                                )}
                                                <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 font-medium">
                                                    {item.type}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                                                <span className="font-semibold text-slate-700 dark:text-slate-300">
                                                    {item.company}
                                                </span>
                                                <span>·</span>
                                                <span>{item.location}</span>
                                                <span>·</span>
                                                <span className="font-mono text-violet-600 dark:text-violet-400 font-semibold">{item.period}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 flex-shrink-0 pt-1 sm:pt-0">
                                        <div className={`w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-violet-600 text-white border-violet-600' : 'text-slate-400'}`}>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Body */}
                                {isOpen && (
                                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed italic">
                                            {item.summary}
                                        </p>

                                        {/* Bullets strictly from CV */}
                                        <div className="mb-5">
                                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                                                Tanggung Jawab & Capaian Kunci:
                                            </p>
                                            <ul className="space-y-2">
                                                {item.bullets.map((b, bi) => (
                                                    <li key={bi} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                                        <span className="text-violet-500 dark:text-violet-400 font-bold mt-0.5">•</span>
                                                        <span className="leading-relaxed">{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Skills pills */}
                                        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-200/50 dark:border-white/5">
                                            <span className="text-[11px] text-slate-400 mr-1">Skills:</span>
                                            {item.skills.map((s) => (
                                                <span
                                                    key={s}
                                                    className="text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-white/10 font-medium"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
