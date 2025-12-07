import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
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
              <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={45} />
                <ambientLight intensity={0.4} />
                <directionalLight
                  position={[5, 8, 5]}
                  intensity={1}
                  castShadow
                  shadow-mapSize-width={2048}
                  shadow-mapSize-height={2048}
                />
                <pointLight position={[-5, 5, -5]} intensity={0.5} />
                <pointLight position={[5, 3, 5]} intensity={0.3} color="#FF3838" />
                
                {/* Scène 3D du bureau */}
                <DeskScene />

                {/* Contrôles interactifs - Rotation, Zoom, Pan */}
                <OrbitControls
                  enableZoom={true}
                  enablePan={true}
                  enableRotate={true}
                  minDistance={3}
                  maxDistance={10}
                  minPolarAngle={0}
                  maxPolarAngle={Math.PI / 1.8}
                  autoRotate={false}
                  enableDamping={true}
                  dampingFactor={0.05}
                />
                
                <Environment preset="sunset" />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Scène complète du bureau professionnel
const DeskScene = () => {
  return (
    <group>
      {/* Plan de travail (Bureau) - Surface en bois clair */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[4, 2]} />
        <meshStandardMaterial 
          color="#D4A574" 
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Écran d'ordinateur */}
      <group position={[0, 0.6, -0.3]}>
        {/* Support de l'écran */}
        <mesh position={[0, -0.3, 0]} castShadow>
          <boxGeometry args={[0.1, 0.6, 0.1]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Écran principal */}
        <mesh position={[0, 0.1, 0]} castShadow>
          <boxGeometry args={[1.2, 0.7, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Écran allumé */}
        <mesh position={[0, 0.1, 0.03]}>
          <planeGeometry args={[1.1, 0.65]} />
          <meshStandardMaterial 
            emissive="#00aaff" 
            emissiveIntensity={0.6}
            color="#001122"
          />
        </mesh>
      </group>

      {/* Clavier */}
      <mesh position={[0, 0.08, 0.3]} rotation={[-0.1, 0, 0]} castShadow>
        <boxGeometry args={[0.8, 0.05, 0.3]} />
        <meshStandardMaterial color="#333" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Souris */}
      <mesh position={[0.5, 0.08, 0.4]} rotation={[-0.1, 0, 0.1]} castShadow>
        <boxGeometry args={[0.12, 0.06, 0.18]} />
        <meshStandardMaterial color="#222" metalness={0.5} roughness={0.6} />
      </mesh>

      {/* Lampe de bureau */}
      <group position={[-0.6, 0.5, 0.2]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.4]} />
          <meshStandardMaterial color="#666" />
        </mesh>
        <mesh position={[0, 0.3, 0]} castShadow>
          <coneGeometry args={[0.15, 0.1, 8]} />
          <meshStandardMaterial color="#fff" emissive="#FFD700" emissiveIntensity={0.3} />
        </mesh>
        {/* Lumière de la lampe */}
        <pointLight position={[0, 0.35, 0]} intensity={0.8} color="#FFD700" />
      </group>

      {/* Tasse de café */}
      <group position={[0.7, 0.15, 0.2]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.12]} />
          <meshStandardMaterial color="#4a2c1a" />
        </mesh>
        <mesh position={[0, 0.08, 0]} castShadow>
          <torusGeometry args={[0.08, 0.01, 8, 16]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      </group>

      {/* Livre */}
      <mesh position={[-0.5, 0.1, 0.4]} rotation={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.2, 0.25, 0.15]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Plante */}
      <group position={[-0.8, 0.15, -0.3]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.15]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0, 0.15, 0]} castShadow>
          <coneGeometry args={[0.12, 0.2, 8]} />
          <meshStandardMaterial color="#228B22" />
        </mesh>
      </group>

      {/* Smartphone */}
      <mesh position={[0.3, 0.1, 0.5]} rotation={[0.2, 0.3, 0.2]} castShadow>
        <boxGeometry args={[0.08, 0.15, 0.01]} />
        <meshStandardMaterial color="#000" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Objets décoratifs flottants (technologies) */}
      <FloatingTechIcons />
    </group>
  );
};

// Icônes de technologies flottantes autour du bureau
const FloatingTechIcons = () => {
  const icons = [
    { position: [1.5, 1, 0], rotation: [0, 0, 0], size: 0.15 },
    { position: [-1.5, 1, 0], rotation: [0, 0, 0], size: 0.15 },
    { position: [0, 1.5, 1], rotation: [0, 0, 0], size: 0.12 },
    { position: [0, 1.5, -1], rotation: [0, 0, 0], size: 0.12 },
  ];

  return (
    <>
      {icons.map((icon, index) => (
        <TechIcon key={index} {...icon} />
      ))}
    </>
  );
};

// Icône de technologie individuelle
const TechIcon = ({ position, rotation, size }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={size}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#FF3838"
        metalness={0.8}
        roughness={0.2}
        emissive="#FF3838"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

export default Hero;
