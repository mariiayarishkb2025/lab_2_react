import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rose-50/50 py-10 px-4 sm:px-6">
      <main className="max-w-3xl mx-auto space-y-6">
        <Header />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

export default App;
