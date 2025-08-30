import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F4EC' }}>
      {/* Main Content - All Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Sameep Vani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}