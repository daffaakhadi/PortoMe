import React, { useState } from 'react';

export default function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState(null);

    const copyEmail = () => {
        navigator.clipboard.writeText('akhadidaffa13@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const copyPhone = () => {
        navigator.clipboard.writeText('+6282190116233');
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            setForm({ name: '', email: '', subject: '', message: '' });
        }, 1200);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-violet-600/20 via-pink-500/15 to-transparent rounded-t-full blur-3xl pointer-events-none -z-0"></div>

            <div className="max-w-6xl mx-auto px-5 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="fade-up mb-14 text-center max-w-2xl mx-auto">
                    <p className="section-label justify-center mb-2">
                        <span className="w-5 h-0.5 bg-violet-500 rounded-full inline-block"></span>
                        Hubungi Saya
                        <span className="w-5 h-0.5 bg-violet-500 rounded-full inline-block"></span>
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                        Mari Berkolaborasi & Mewujudkan Karya Digital
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
                        Terbuka untuk peluang kerja penuh waktu, rekrutmen Software Engineering, proyek video komersial, maupun kolaborasi startup.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    
                    {/* ── LEFT: CONTACT DETAILS & CHANNELS ── */}
                    <div className="fade-up lg:col-span-5 space-y-4 text-left">
                        
                        {/* Email Card */}
                        <div className="card-float p-5 group flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3.5">
                                <div className="w-11 h-11 rounded-2xl bg-violet-500/15 text-violet-600 dark:text-violet-400 flex items-center justify-center text-xl flex-shrink-0">
                                    ✉️
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email Utama</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 select-all">
                                        akhadidaffa13@gmail.com
                                    </p>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                                        Respon cepat untuk rekrutmen & proyek
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={copyEmail}
                                className="btn-pill btn-outline text-xs py-1.5 px-3 flex-shrink-0"
                            >
                                {copiedEmail ? '✓ Tersalin' : 'Salin'}
                            </button>
                        </div>

                        {/* WhatsApp / Phone Card */}
                        <div className="card-float p-5 group flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3.5">
                                <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl flex-shrink-0">
                                    📱
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">WhatsApp / Telepon</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 select-all">
                                        +62 821-9011-6233
                                    </p>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                                        Aktif setiap hari (Senin — Minggu)
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                                <button
                                    onClick={copyPhone}
                                    className="btn-pill btn-outline text-xs py-1.5 px-2.5"
                                    title="Salin Nomor"
                                >
                                    {copiedPhone ? '✓' : 'Salin'}
                                </button>
                                <a
                                    href="https://wa.me/6282190116233"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-pill btn-dark text-xs py-1.5 px-3"
                                >
                                    Chat WA
                                </a>
                            </div>
                        </div>

                        {/* LinkedIn Card */}
                        <a
                            href="http://linkedin.com/in/daffa-akhadi-yoga-perdana"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-float p-5 flex items-center justify-between gap-4 group"
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="w-11 h-11 rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl flex-shrink-0">
                                    💼
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">LinkedIn</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        daffa-akhadi-yoga-perdana
                                    </p>
                                </div>
                            </div>
                            <svg className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>

                        {/* GitHub Card */}
                        <a
                            href="https://github.com/daffaakhadi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-float p-5 flex items-center justify-between gap-4 group"
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="w-11 h-11 rounded-2xl bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white flex items-center justify-center text-xl flex-shrink-0">
                                    🐙
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">GitHub</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        github.com/daffaakhadi
                                    </p>
                                </div>
                            </div>
                            <svg className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>

                        {/* Address Card */}
                        <div className="card-float p-5 text-left">
                            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                                Domisili & Lokasi Sesuai CV
                            </p>
                            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                Dk. Senden RT 18/ RW 09, Kel. Ngabeyan, Kec. Karanganom, Kab. Klaten, Jawa Tengah (57475) & Kampus Telkom University Bandung.
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT: INTERACTIVE CONTACT FORM ── */}
                    <div className="fade-up lg:col-span-7 card-float p-7 text-left">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                Kirim Pesan Langsung
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                Silakan tinggalkan pesan, tawaran kolaborasi, atau jadwal wawancara kerja.
                            </p>
                        </div>

                        {status === 'sent' && (
                            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm flex items-center gap-3">
                                <span className="text-xl">✅</span>
                                <div>
                                    <p className="font-bold">Terima kasih banyak!</p>
                                    <p className="text-xs">Pesan Anda telah berhasil dikirimkan. Saya akan membalas segera melalui email.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                                        Nama Lengkap *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Contoh: HR Manager / Kolega"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                                        Alamat Email Anda *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="nama@perusahaan.com"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                                    Subjek Pesan / Perihal *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Tawaran Posisi / Proyek Video / Kolaborasi"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                                    Isi Pesan *
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tuliskan detail tawaran kerja atau pesan Anda di sini..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full btn-pill btn-gradient text-sm py-3 font-bold justify-center shadow-lg shadow-violet-500/25"
                            >
                                {status === 'sending' ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Mengirimkan Pesan...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <span>Kirimkan Pesan Sekarang</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}
