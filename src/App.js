import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16 items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Sameep Vani</h1>
          </div>
        </div>
      </header>

      {/* Main Content - All Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Sameep Vani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}