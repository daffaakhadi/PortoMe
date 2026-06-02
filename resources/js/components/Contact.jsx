import React, { useState } from 'react';

const links = [
    {
        label: 'Email',
        sub: 'Untuk project & kolaborasi',
        value: 'daffa@example.com',
        href: 'mailto:daffa@example.com',
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        sub: 'Terhubung secara profesional',
        value: 'linkedin.com/in/daffaakhadi',
        href: 'https://linkedin.com/in/daffaakhadi',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        sub: 'Lihat proyek open-source',
        value: 'github.com/daffaakhadi',
        href: 'https://github.com/daffaakhadi',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        sub: 'Konten & creative work',
        value: '@daffaakhadi',
        href: 'https://instagram.com/daffaakhadi',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
];

const inputCls = "w-full px-4 py-3 rounded-2xl card text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 transition-all";

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            setForm({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="py-28">
            <div className="max-w-6xl mx-auto px-5 lg:px-8">

                {/* Closing statement */}
                <div className="fade-up mb-16 text-center">
                    <p className="section-label justify-center mb-4">
                        <span className="w-4 h-px bg-gray-400 inline-block"></span>
                        Contact
                        <span className="w-4 h-px bg-gray-400 inline-block"></span>
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                        Let's build impactful<br className="hidden sm:block" />
                        <span className="relative inline-block mt-1">
                            <span className="relative z-10">digital experiences</span>
                            <span className="absolute -inset-1 -skew-x-1 rounded-lg bg-violet-100 dark:bg-violet-900/30 -z-0"></span>
                        </span>
                        {' '}together.
                    </h2>
                    <p className="text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                        Terbuka untuk project freelance, magang, kolaborasi, atau sekadar ngobrol soal teknologi dan desain.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-6">

                    {/* Left — contact links */}
                    <div className="lg:col-span-2 fade-up space-y-3">
                        {links.map(l => (
                            <a
                                key={l.label}
                                href={l.href}
                                target={l.href.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="card flex items-center gap-3 p-4 hover:scale-[1.01] transition-transform group"
                            >
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                                    style={{ background: 'rgba(0,0,0,0.05)' }}
                                >
                                    <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                        {l.icon}
                                    </span>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs text-gray-400 dark:text-gray-500">{l.sub}</p>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{l.value}</p>
                                </div>
                                <svg className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                        ))}

                        {/* Availability card */}
                        <div className="card p-4 border-l-2 border-l-emerald-400">
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Tersedia Sekarang</span>
                            </div>
                            <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                                Terbuka untuk freelance, magang, dan kolaborasi. Waktu respons: 24–48 jam.
                            </p>
                        </div>
                    </div>

                    {/* Right — form */}
                    <div className="lg:col-span-3 fade-up">
                        <div className="card p-6 sm:p-8">
                            {status === 'sent' ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                                        style={{ background: 'rgba(16,185,129,0.1)' }}>
                                        <svg className="w-7 h-7 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Pesan Terkirim!</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xs">
                                        Terima kasih telah menghubungi saya. Saya akan membalas dalam 24–48 jam.
                                    </p>
                                    <button onClick={() => setStatus(null)} className="btn-pill btn-dark">
                                        Kirim Lagi
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="mb-6">
                                        <h3 className="text-base font-bold text-gray-900 dark:text-white">Kirim Pesan</h3>
                                        <p className="text-sm text-gray-400 dark:text-gray-500 mt-0.5">Ceritakan project atau ide kamu.</p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Nama</label>
                                            <input type="text" name="name" value={form.name} onChange={handleChange}
                                                placeholder="Nama kamu" required className={inputCls} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Email</label>
                                            <input type="email" name="email" value={form.email} onChange={handleChange}
                                                placeholder="email@kamu.com" required className={inputCls} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Subject</label>
                                        <input type="text" name="subject" value={form.subject} onChange={handleChange}
                                            placeholder="Project inquiry, collaboration, dll." required className={inputCls} />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Pesan</label>
                                        <textarea name="message" value={form.message} onChange={handleChange}
                                            placeholder="Ceritakan lebih detail tentang project atau kebutuhan kamu..."
                                            required rows={5} className={`${inputCls} resize-none`} />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="btn-pill btn-dark w-full justify-center disabled:opacity-60"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Mengirim...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                                </svg>
                                                Kirim Pesan
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
