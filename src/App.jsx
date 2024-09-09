import styles from './App.module.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import { Projects } from './components/Projects/projects';

function App() {

  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects /> {/* Asegúrate de usar el componente Projects */}
      <Contact />
    </div>
  );
}

export default App;
