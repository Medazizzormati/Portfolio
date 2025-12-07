import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Bloquer le clic droit
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    // Bloquer les raccourcis clavier pour les outils de développement
    const handleKeyDown = (event) => {
      // F12
      if (event.keyCode === 123) {
        event.preventDefault();
        return false;
      }
      // Ctrl+Shift+I
      if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
        return false;
      }
      // Ctrl+Shift+J
      if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
        event.preventDefault();
        return false;
      }
      // Ctrl+Shift+C
      if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
        event.preventDefault();
        return false;
      }
      // Ctrl+U (voir le code source)
      if (event.ctrlKey && event.keyCode === 85) {
        event.preventDefault();
        return false;
      }
      // Ctrl+S (enregistrer la page)
      if (event.ctrlKey && event.keyCode === 83) {
        event.preventDefault();
        return false;
      }
      // Ctrl+Shift+K (console Firefox)
      if (event.ctrlKey && event.shiftKey && event.keyCode === 75) {
        event.preventDefault();
        return false;
      }
    };

    // Bloquer la sélection de texte (optionnel)
    const handleSelectStart = (event) => {
      event.preventDefault();
    };

    // Bloquer le drag and drop
    const handleDragStart = (event) => {
      event.preventDefault();
    };

    // Ajouter les event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Nettoyer les event listeners au démontage
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
