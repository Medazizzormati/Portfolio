import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutTextRef = useRef(null);
  const aboutVisualRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            if (entry.target.classList.contains('slide-in-left')) {
              entry.target.style.transform = 'translateX(0)';
            } else if (entry.target.classList.contains('slide-in-right')) {
              entry.target.style.transform = 'translateX(0)';
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (aboutTextRef.current) observer.observe(aboutTextRef.current);
    if (aboutVisualRef.current) observer.observe(aboutVisualRef.current);

    return () => observer.disconnect();
  }, []);

  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Angular',
    'Node.js',
    'Express.js',
    'Python',
    'Java',
    'Spring Boot',
    'Flutter',
    'React Native',
    'TypeScript',
    'MySQL',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'Git',
    'AI/ML',
    'UI/UX Design',
    'REST API',
    'GraphQL',
    'JWT',
    'OAuth',
    'AWS',
    'Firebase',
    'CI/CD'
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-text slide-in-left" ref={aboutTextRef}>
            <p>
              Je suis Mohamed Aziz, développeur full-stack passionné, spécialisé en développement web et mobile. 
              Autonome et adaptable, avec une maîtrise des technologies modernes (React, Angular, Spring Boot, Flutter) 
              et une expérience en intégration d'intelligence artificielle. 
              À la recherche d'un projet de fin d'études challengeant pour valoriser mes compétences techniques.
            </p>
            <div className="skills">
              <h3>Compétences & Technologies</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="about-visual slide-in-right" ref={aboutVisualRef}>
            <div className="code-animation">
              <div className="code-line">const developer = {'{'}</div>
              <div className="code-line indent">name: 'Mohamed Aziz ZORMATI',</div>
              <div className="code-line indent">role: 'Full-Stack Developer',</div>
              <div className="code-line indent">specialization: 'Web & Mobile Development',</div>
              <div className="code-line indent">experience: 'AI Integration & Spring Boot',</div>
              <div className="code-line indent">location: 'Sousse, Tunisia'</div>
              <div className="code-line">{'};'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
