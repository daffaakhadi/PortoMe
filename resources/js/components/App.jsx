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

export default function App() {
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true' ||
            window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    useEffect(() => {
        if (loading) return;
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
        );
        document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, [loading]);

    if (loading) return <Loader />;

    return (
        <div className={`dark-transition noise gradient-bg min-h-screen text-gray-900 dark:text-gray-100`}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="relative z-10">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
