import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const phrase = 'Engineering Student';

  useEffect(() => {
    if (isTypingComplete) return;

    let currentIndex = 0;
    const typeEffect = () => {
      if (currentIndex < phrase.length) {
        setCurrentText(phrase.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeEffect, 100);
      } else {
        setIsTypingComplete(true);
      }
    };

    const timeout = setTimeout(typeEffect, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">Hello, I'm Mohamed Aziz ZORMATI </p>
            <h1 className="hero-title">
              <span>{currentText}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="hero-quote">Développeur full-stack passionné, spécialisé en développement web et mobile avec intégration d'IA</p>
            <div className="hero-buttons">
              <button className="glow-genz-button">Download CV</button>
            </div>
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/mohamed-aziz-zormati" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/medaziz-zormati" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <SolarSystem />
          </div>
        </div>
      </div>
    </section>
  );
};

const SolarSystem = () => {
  const [orbitElements, setOrbitElements] = useState([]);

  useEffect(() => {
    const techIcons = [
      { name: 'html', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'css', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'react', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'angular', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'nodejs', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'spring', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'mysql', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'mongodb', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
    ];

    const elements = techIcons.map((tech, index) => {
      const startAngle = Math.random() * 360;
      const radius = 120 + (index * 40);
      const duration = 15 + Math.random() * 15;
      const direction = Math.random() > 0.5 ? 'normal' : 'reverse';

      return {
        ...tech,
        startAngle,
        radius,
        duration,
        direction,
        index
      };
    });

    setOrbitElements(elements);
  }, []);

  return (
    <div className="avatar-container">
      <div className="sun-core">
        <img src="/aziz.png" alt="Sun Image" />
      </div>

      {orbitElements.map((element) => (
        <OrbitIcon
          key={element.name}
          element={element}
        />
      ))}
    </div>
  );
};

const OrbitIcon = ({ element }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    const animationName = `orbit${element.index}`;
    
    const keyframes = `
      @keyframes ${animationName} {
        from {
          transform: rotate(${element.startAngle}deg) translateX(${element.radius}px) rotate(-${element.startAngle}deg);
        }
        to {
          transform: rotate(${element.startAngle + 360}deg) translateX(${element.radius}px) rotate(-${element.startAngle + 360}deg);
        }
      }
    `;

    style.textContent = keyframes;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [element]);

  const animationStyle = {
    transform: `rotate(${element.startAngle}deg) translateX(${element.radius}px) rotate(-${element.startAngle}deg)`,
    animation: `orbit${element.index} ${element.duration}s linear infinite ${element.direction}`,
    animationPlayState: isHovered ? 'paused' : 'running'
  };

  return (
    <button
      className={`orbit-icon ${element.name} random-orbit`}
      style={animationStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type="button"
    >
      <img src={element.url} alt={`${element.name} Icon`} />
    </button>
  );
};

export default Hero;
