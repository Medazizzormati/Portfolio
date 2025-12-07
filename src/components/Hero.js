import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const phrase = 'Full-Stack Developer';

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
            <div className="canvas-container">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} />
                
                {/* Photo centrale avec effet 3D */}
                <CenterSphere />

                {/* Éléments flottants autour */}
                <FloatingElements />
                
                {/* Contrôles pour interaction */}
                <OrbitControls 
                  enableZoom={false} 
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sphère centrale avec photo
const CenterSphere = () => {
  const texture = useTexture('/aziz.png');
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]} scale={1.2}>
        <meshStandardMaterial
          map={texture}
          metalness={0.3}
          roughness={0.4}
          emissive="#FF3838"
          emissiveIntensity={0.2}
        />
      </Sphere>
      {/* Halo autour de la sphère */}
      <Sphere args={[1.35, 32, 32]}>
        <meshStandardMaterial
          color="#FF3838"
          transparent
          opacity={0.2}
          emissive="#FF3838"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
};

// Composant pour les éléments flottants autour
const FloatingElements = () => {
  const elements = [
    { position: [3, 2, 0], color: '#FF3838', speed: 0.02 },
    { position: [-3, 2, 0], color: '#FF5C5C', speed: 0.015 },
    { position: [0, 3, -2], color: '#FF3838', speed: 0.025 },
    { position: [2, -2, 1], color: '#FF5C5C', speed: 0.018 },
    { position: [-2, -2, 1], color: '#FF3838', speed: 0.022 },
    { position: [3, -1, -1], color: '#FF5C5C', speed: 0.02 },
  ];

  return (
    <>
      {elements.map((elem, index) => (
        <FloatingSphere
          key={index}
          position={elem.position}
          color={elem.color}
          speed={elem.speed}
        />
      ))}
    </>
  );
};

// Sphère flottante individuelle
const FloatingSphere = ({ position, color, speed }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.3}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
      </mesh>
    </Float>
  );
};

export default Hero;
