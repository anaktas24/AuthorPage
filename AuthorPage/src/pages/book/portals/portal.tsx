import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PortalPanel from './portalpanel'
import * as THREE from 'three';

const PortalChoice: React.FC = () => {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        gl={{ antialias: true }}
        style={{ background: 'black' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-1.2, -1, 1]} intensity={0.5} color="#ffd700" /> {/* Torch-like light */}
        <pointLight position={[1.2, -1, 1]} intensity={0.5} color="#ffd700" /> {/* Torch-like light */}


        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />

        <PortalPanel
          position={[-1.2, 0, 1]}
          label="Rollenspiel-Charakter"
          imageUrl="https://picsum.photos/600/800?random=1" // Fallback URL for testing
          onClick={() => console.log('Enter Rollenspiel-Charakter')}
          rotationY={THREE.MathUtils.degToRad(30)}
        />

        <PortalPanel
          position={[1.2, 0, 1]}
          label="PvP-Charakter"
          imageUrl="https://picsum.photos/600/800?random=2" // Fallback URL for testing
          onClick={() => console.log('Enter PvP-Charakter')}
          rotationY={THREE.MathUtils.degToRad(-30)}
        />
      </Canvas>
    </div>
  );
};

export default PortalChoice;
