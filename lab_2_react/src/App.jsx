import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hours = new Date().getHours();
    setTheme(hours >= 7 && hours < 21 ? 'light' : 'dark');
  }, []);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-rose-50/50 dark:bg-zinc-950 text-rose-950 dark:text-zinc-100 py-10 px-4 sm:px-6 transition-colors duration-300">
        <div className="max-w-3xl mx-auto flex justify-end mb-4">
          <button
            onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
            className="px-4 py-2 text-sm font-semibold rounded-full bg-white/80 dark:bg-zinc-800 border border-rose-200 dark:border-zinc-700 shadow-sm"
          >
            {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
          </button>
        </div>

        <main className="max-w-3xl mx-auto space-y-6">
          <Header />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Reviews />
          <Footer />
        </main>

        <ContactForm />
      </div>
    </div>
  );
}

export default App;
