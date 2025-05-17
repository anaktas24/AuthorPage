import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface PortalPanelProps {
  position: [number, number, number];
  label: string;
  imageUrl: string;
  onClick: () => void;
  rotationY: number;
}

const BorderMaterial = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = {
    uBorderWidth: { value: 0.05 },
    uBorderColor: { value: new THREE.Color(0xffd700) },
    uCornerRadius: { value: 0.1 },
  };

  useEffect(() => {
    if (!materialRef.current) return;
    console.log('Border material initialized:', materialRef.current);
    return () => {
      if (materialRef.current) {
        materialRef.current.dispose();
      }
    };
  }, []);

  return (
    <shaderMaterial
      ref={materialRef}
      uniforms={uniforms}
      vertexShader={`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `}
      fragmentShader={`
        uniform float uBorderWidth;
        uniform vec3 uBorderColor;
        uniform float uCornerRadius;
        varying vec2 vUv;

        float roundedBoxSDF(vec2 CenterPosition, vec2 Size, float Radius) {
          return length(max(abs(CenterPosition) - Size + Radius, 0.0)) - Radius;
        }

        void main() {
          vec2 size = vec2(0.5, 0.5);
          float distance = roundedBoxSDF(vUv - 0.5, size, uCornerRadius);
          float borderAlpha = smoothstep(uBorderWidth, uBorderWidth + 0.01, abs(distance));
          vec4 borderColor = vec4(uBorderColor, borderAlpha * 0.8);
          gl_FragColor = borderColor;
        }
      `}
      transparent
      side={THREE.DoubleSide}
    />
  );
};

const PortalPanel: React.FC<PortalPanelProps> = ({ position, label, imageUrl, onClick, rotationY }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [textureError, setTextureError] = useState(false);
  const texture = useTexture(imageUrl, (tex) => {
    if (!tex.image) {
      console.error(`Failed to load texture: ${imageUrl}`);
      setTextureError(true);
    }
  });

  useEffect(() => {
    texture.flipY = false;
    texture.needsUpdate = true;
    texture.rotation = Math.PI;
    console.log('Texture loaded:', imageUrl, texture.image);
    return () => {
      texture.dispose();
    };
  }, [texture, imageUrl]);

  useFrame(() => {
    if (!groupRef.current) return;
    const targetScale = hovered ? 1.1 : 1.0;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <group
      position={position}
      ref={groupRef}
      rotation={[0, rotationY, 0]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Image Layer */}
      <mesh>
        <planeGeometry args={[1.5, 2.1]} />
        {texture.image && !textureError ? (
          <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
        ) : (
          <meshBasicMaterial color="gray" />
        )}
      </mesh>

      {/* Depth Layers */}
      <mesh position={[0, 0, 0.02]} onClick={onClick}>
        <planeGeometry args={[1.425, 1.995]} />
        {texture.image && !textureError ? (
          <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
        ) : (
          <meshBasicMaterial color="gray" />
        )}
      </mesh>

      <mesh position={[0, 0, 0.05]} onClick={onClick}>
        <planeGeometry args={[1.35, 1.89]} />
        {texture.image && !textureError ? (
          <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
        ) : (
          <meshBasicMaterial color="gray" />
        )}
      </mesh>

      {/* Border Layer */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[1.5, 2.1]} />
        <BorderMaterial />
      </mesh>

      {/* Label Inside Panel */}
      <Html
        position={[0, -0.9, 0.1]}
        center
        transform
        style={{ pointerEvents: 'none' }}
      >
        <div
          className={`bg-black/80 text-white px-2 py-0.5 rounded text-[8px] font-medium
            transition-all duration-300 ${hovered ? 'shadow-[0_0_8px_#ffd700]' : ''}`}
        >
          {label}
        </div>
      </Html>
    </group>
  );
};

export default PortalPanel;
