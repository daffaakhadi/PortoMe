import React, { useEffect, useRef, useState } from 'react';

const groups = [
    {
        label: 'Development',
        icon: '💻',
        skills: [
            { name: 'Kotlin', pct: 85 },
            { name: 'Jetpack Compose', pct: 80 },
            { name: 'Laravel', pct: 80 },
            { name: 'PHP', pct: 75 },
            { name: 'REST API', pct: 78 },
            { name: 'Room Database', pct: 72 },
            { name: 'MySQL', pct: 74 },
        ],
    },
    {
        label: 'Design',
        icon: '🎨',
        skills: [
            { name: 'Figma', pct: 85 },
            { name: 'UI Design', pct: 83 },
            { name: 'UX Design', pct: 78 },
            { name: 'Wireframing', pct: 82 },
            { name: 'Prototyping', pct: 80 },
        ],
    },
    {
        label: 'Creative',
        icon: '🎬',
        skills: [
            { name: 'Adobe Premiere Pro', pct: 88 },
            { name: 'CapCut', pct: 85 },
            { name: 'Motion Graphics', pct: 70 },
            { name: 'Content Creation', pct: 85 },
            { name: 'Storytelling', pct: 80 },
        ],
    },
];

function Bar({ name, pct, animate }) {
    return (
        <div>
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
                <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 tabular-nums">{pct}%</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.07)' }}>
                <div
                    className="skill-bar h-full rounded-full"
                    style={{
                        width: animate ? `${pct}%` : '0%',
                        background: 'linear-gradient(90deg, #7c3aed, #db2777)',
                    }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    const [animated, setAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setAnimated(true); },
            { threshold: 0.15 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section id="skills" ref={ref} className="py-28">
            <div className="max-w-6xl mx-auto px-5 lg:px-8">

                {/* Header */}
                <div className="fade-up mb-14">
                    <p className="section-label mb-3">
                        <span className="w-4 h-px bg-gray-400 inline-block"></span>
                        Skills
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Technical Expertise</h2>
                </div>

                {/* Groups */}
                <div className="grid sm:grid-cols-3 gap-5 mb-10">
                    {groups.map((g, gi) => (
                        <div
                            key={g.label}
                            className="fade-up card p-6"
                            style={{ transitionDelay: `${gi * 0.1}s` }}
                        >
                            {/* Group header */}
                            <div className="flex items-center gap-2.5 mb-6">
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                                    style={{ background: 'rgba(0,0,0,0.05)' }}>
                                    {g.icon}
                                </div>
                                <span className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">{g.label}</span>
                            </div>

                            {/* Bars */}
                            <div className="space-y-4">
                                {g.skills.map(s => (
                                    <Bar key={s.name} name={s.name} pct={s.pct} animate={animated} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skill tags cloud */}
                <div className="fade-up card p-6">
                    <p className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-5">All Skills & Tools</p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Kotlin', 'Jetpack Compose', 'MVVM', 'Room Database', 'Retrofit',
                            'Laravel', 'PHP', 'MySQL', 'REST API', 'Tailwind CSS', 'JavaScript',
                            'Figma', 'UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Design System',
                            'Adobe Premiere Pro', 'CapCut', 'After Effects', 'Motion Graphics', 'Canva',
                            'Git', 'GitHub', 'Android Studio', 'VS Code', 'Postman', 'Firebase',
                            'Content Creation', 'Storytelling', 'Social Media',
                        ].map(skill => (
                            <span
                                key={skill}
                                className="text-xs px-3 py-1.5 rounded-full card font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
