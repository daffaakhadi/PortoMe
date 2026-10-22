import React from 'react';

const awards = [
    {
        title: 'Juara Pertama Lomba Video TikTok Nasional',
        issuer: 'Ikatan Alumni Resimen Mahasiswa Indonesia (IARMI)',
        year: '2024',
        rank: '1st Place',
        badge: 'Tingkat Nasional',
        icon: '🏆',
        color: 'from-amber-500 to-yellow-600',
        desc: 'Meraih Juara 1 Nasional dalam kompetisi video pendek TikTok bertema "Melangkah Bersama IARMI Untuk Mencapai Indonesia Maju" melalui penyusunan visual storytelling, pacing editing dinamis, dan narasi inspiratif kebangsaan.',
    },
    {
        title: 'Juara 3 Photo Competition Hari Korupsi Sedunia (Hakordia)',
        issuer: 'Open Library Universitas Telkom',
        year: '2023',
        rank: '3rd Place',
        badge: 'Universitas',
        icon: '🥉',
        color: 'from-orange-500 to-amber-700',
        desc: 'Meraih peringkat ketiga dalam kompetisi fotografi peringatan Hari Antikorupsi Sedunia (Hakordia) dengan membawakan pesan visual integritas dan transparansi generasi muda.',
    },
    {
        title: 'Top 10 News Article Competition',
        issuer: 'Ambivers Foundation',
        year: '2024 - 2026',
        rank: 'Top 10',
        badge: 'Kompetisi Nasional',
        icon: '📰',
        color: 'from-blue-500 to-indigo-600',
        desc: 'Masuk dalam 10 besar penulis artikel berita nasional yang diselenggarakan Ambivers Foundation, menunjukkan kemampuan riset, jurnalisme data, dan penyampaian opini bernas.',
    },
    {
        title: 'Kompetisi Mahasiswa Nasional Kompasiana & Prudential',
        issuer: 'Kompasiana & PT Prudential Life Assurance',
        year: '2026',
        rank: 'National Finalist',
        badge: 'Literasi Keuangan',
        icon: '💡',
        color: 'from-rose-500 to-pink-600',
        desc: 'Kompetisi edukasi finansial nasional bertajuk "PRUteksi Finansial, Bahagia Kemudian" yang bertujuan meningkatkan literasi keuangan mahasiswa, perencanaan jangka panjang, dan proteksi masa depan.',
    },
    {
        title: 'Direction Makers - Storyteller Youth Economic Summit (YES 2026)',
        issuer: 'CORE Indonesia & Suara.com',
        year: '2026',
        rank: 'Speaker / Storyteller',
        badge: 'Transformasi Ekonomi',
        icon: '🎤',
        color: 'from-emerald-500 to-teal-600',
        desc: 'Terpilih sebagai Direction Makers - Storyteller pada forum Youth Economic Summit 2026 mengangkat peran Gen Z dan Milenial sebagai penggerak transformasi ekonomi nasional yang inklusif dan berkelanjutan.',
    },
    {
        title: 'Media Creative DigiHack 2025 "AI for Social Impact"',
        issuer: 'Digistar Club by Telkom Indonesia',
        year: '2025',
        rank: 'Committee Lead',
        badge: 'Hackathon 20+ Univ',
        icon: '🤖',
        color: 'from-violet-500 to-purple-700',
        desc: 'Memimpin divisi media kreatif pada kompetisi hackathon nasional DigiHack 2025 yang diikuti 20+ perguruan tinggi di Indonesia dengan fokus pemanfaatan kecerdasan buatan untuk dampak sosial masyarakat.',
    },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 lg:px-8">

                {/* Section Header */}
                <div className="fade-up mb-14 text-left">
                    <p className="section-label mb-2">
                        <span className="w-5 h-0.5 bg-violet-500 rounded-full inline-block"></span>
                        Penghargaan & Pengakuan
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Prestasi, Juara Lomba & Forum Nasional
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
                        Apresiasi dan rekognisi atas karya kreatif, literasi, kompetisi video nasional, dan kepemimpinan ide.
                    </p>
                </div>

                {/* Awards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {awards.map((item, idx) => (
                        <div
                            key={item.title}
                            className="fade-up card-float p-6 flex flex-col justify-between group"
                            style={{ transitionDelay: `${idx * 0.06}s` }}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-3xl p-2 rounded-2xl bg-slate-100 dark:bg-white/[0.06] inline-block">
                                            {item.icon}
                                        </span>
                                        <div>
                                            <span className="text-xs font-black text-violet-600 dark:text-violet-400 block uppercase tracking-wider">
                                                {item.rank}
                                            </span>
                                            <span className="text-[10px] text-slate-400 font-mono">
                                                {item.year}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300">
                                        {item.badge}
                                    </span>
                                </div>

                                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                                    {item.issuer}
                                </p>

                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                                <span>Verifikasi Berkas Resmi CV</span>
                                <span className="font-semibold text-emerald-600 dark:text-emerald-400">✓ Verified</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LinkedIn verification banner */}
                <div className="fade-up mt-12 card-float p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            Ingin melihat rincian sertifikat dan lisensi profesional?
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            Semua lisensi dan sertifikat penghargaan tercatat lengkap di profil resmi LinkedIn.
                        </p>
                    </div>
                    <a
                        href="http://linkedin.com/in/daffa-akhadi-yoga-perdana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill btn-dark text-xs py-2.5 px-5 flex-shrink-0"
                    >
                        <span>Lihat LinkedIn Profil</span>
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}
