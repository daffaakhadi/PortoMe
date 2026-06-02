import React from 'react';

const highlights = [
    {
        icon: '💻',
        title: 'Software Development',
        desc: 'Memiliki pengalaman mengembangkan aplikasi Android menggunakan Kotlin dan Jetpack Compose serta membangun aplikasi web menggunakan Laravel dan REST API.',
    },
    {
        icon: '🎨',
        title: 'UI/UX Design',
        desc: 'Mendesain antarmuka yang intuitif, modern, dan berorientasi pada kebutuhan pengguna menggunakan Figma dengan pendekatan design thinking.',
    },
    {
        icon: '📹',
        title: 'Content Creation',
        desc: 'Berpengalaman membuat dokumentasi acara, konten media sosial, motion graphic, dan video promosi untuk berbagai kebutuhan organisasi.',
    },
    {
        icon: '🏛️',
        title: 'Organization Experience',
        desc: 'Aktif sebagai Student Ambassador & Content Creator Fakultas Ilmu Terapan Telkom University, membangun kepemimpinan dan kolaborasi.',
    },
    {
        icon: '🎬',
        title: 'Video Editing',
        desc: 'Berpengalaman mengedit video untuk kebutuhan organisasi, event kampus, branding, dan media sosial menggunakan Adobe Premiere Pro dan CapCut.',
    },
    {
        icon: '🚀',
        title: 'Continuous Learning',
        desc: 'Selalu mempelajari perkembangan teknologi terbaru seperti Artificial Intelligence, Mobile Development, dan Product Design.',
    },
];

export default function About() {
    return (
        <section id="about" className="py-28">
            <div className="max-w-6xl mx-auto px-5 lg:px-8">

                {/* Header */}
                <div className="fade-up mb-16">
                    <p className="section-label mb-3">
                        <span className="w-4 h-px bg-gray-400 inline-block"></span>
                        About Me
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
                        Who I Am
                    </h2>

                    {/* Narasi */}
                    <div className="max-w-3xl">
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Saya merupakan mahasiswa{' '}
                            <strong className="text-gray-900 dark:text-white font-semibold">D3 Rekayasa Perangkat Lunak Aplikasi</strong>{' '}
                            di{' '}
                            <strong className="text-gray-900 dark:text-white font-semibold">Telkom University</strong>{' '}
                            yang memiliki minat pada pengembangan aplikasi, desain pengalaman pengguna, serta produksi konten digital. Saya aktif berorganisasi dan berkontribusi dalam berbagai proyek teknologi maupun kreatif yang membantu meningkatkan kemampuan{' '}
                            <strong className="text-gray-900 dark:text-white font-semibold">kolaborasi</strong>,{' '}
                            <strong className="text-gray-900 dark:text-white font-semibold">kepemimpinan</strong>, dan{' '}
                            <strong className="text-gray-900 dark:text-white font-semibold">problem solving</strong>.
                        </p>
                    </div>
                </div>

                {/* Professional Highlights */}
                <div className="fade-up">
                    <p className="section-label mb-8">
                        <span className="w-4 h-px bg-gray-400 inline-block"></span>
                        Professional Highlights
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {highlights.map((h, i) => (
                            <div
                                key={i}
                                className="fade-up card p-6 group hover:scale-[1.01] transition-transform duration-200"
                                style={{ transitionDelay: `${i * 0.07}s` }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl mb-4 flex-shrink-0"
                                    style={{ background: 'rgba(0,0,0,0.05)' }}
                                >
                                    {h.icon}
                                </div>

                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                    {h.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {h.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
