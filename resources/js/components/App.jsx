import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer';
import FloatingWidget from './FloatingWidget';

export default function App() {
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('porto_dark_mode');
        if (saved !== null) {
            return saved === 'true';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1850);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('porto_dark_mode', darkMode);
    }, [darkMode]);

    useEffect(() => {
        if (loading) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
        );

        document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, [loading]);

    if (loading) return <Loader />;

    return (
        <div className="dark-transition noise gradient-bg min-h-screen text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-violet-600 selection:text-white">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="relative z-10 flex-grow">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Achievements />
                <Contact />
            </main>
            <Footer />
            <FloatingWidget darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    );
}
