// src/App.jsx
import Header from './components/Header';
import About from './components/About';
import Channel from './components/Channel';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-light text-dark min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <About />
        <Skills />
        <Education />
        <Projects />
        <Channel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
