import { useNavigate, useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { useState } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import './bookintro.css';

// Define props for the Portal component
interface PortalProps {
  color: string;
  position: [number, number, number];
  label: string;
  onClick: () => void;
}

// Portal component for reusable portal rendering
const Portal: React.FC<PortalProps> = ({ color, position, label, onClick }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { scale, rotation } = useSpring({
    scale: hovered ? 1.2 : 1,
    rotation: hovered ? [0.7, 0.7, 0] : [0.5, 0.5, 0],
    config: { tension: 200, friction: 20 },
  });

  return (
    <div
      className="cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas
        style={{ width: 250, height: 250 }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <animated.mesh
          scale={scale}
          rotation={rotation as unknown as [number, number, number]}
        >
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 0.8 : 0.4}
            roughness={0.2}
            metalness={0.8}
          />
        </animated.mesh>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />
        <EffectComposer>
          <Bloom
            intensity={1.0}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      </Canvas>
      <p className="text-center mt-2 text-lg font-semibold group-hover:text-glow">
        {label}
      </p>
    </div>
  );
};

const BookIntro: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white flex flex-col items-center justify-center space-y-12 overflow-hidden">
      {/* Animated heading with glow effect */}
      <h1 className="text-5xl md:text-6xl font-extrabold animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Choose Your Portal
      </h1>

      {/* Portals container */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Earth Portal */}
        <Portal
          color="#1E90FF"
          position={[0, 0, 0]}
          label="Earth"
          onClick={() => navigate(`/book/${id}?world=earth`)}
        />

        {/* Suraido Portal */}
        <Portal
          color="#FF00FF"
          position={[5, 0, 0]}
          label="Suraido"
          onClick={() => navigate(`/book/${id}?world=suraido`)}
        />
      </div>

      {/* Optional: Add subtle particle background */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas>
          <Stars
            radius={150}
            depth={60}
            count={10000}
            factor={7}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default BookIntro;
