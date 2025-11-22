import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export interface TexturedObjectProps {
  /** Path to the texture file */
  texturePath: string;
  /** Type of object to render: 'sphere', 'box', 'torus', 'cylinder', or 'plane' */
  objectType?: 'sphere' | 'box' | 'torus' | 'cylinder' | 'plane';
  /** Label to display below the object */
  label?: string;
  /** Enable auto-rotation */
  rotate?: boolean;
  /** Width of the canvas */
  width?: string | number;
  /** Height of the canvas */
  height?: string | number;
}

interface SceneProps {
  texturePath: string;
  objectType: 'sphere' | 'box' | 'torus' | 'cylinder' | 'plane';
  rotate: boolean;
}

function TexturedMesh({ texturePath, objectType, rotate }: SceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(texturePath);

  // Enable texture wrapping and set repeat for better tiling
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(objectType === 'plane' ? 4 : 2, objectType === 'plane' ? 4 : 2);

  useFrame((state, delta) => {
    if (meshRef.current && rotate) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  const getGeometry = () => {
    switch (objectType) {
      case 'sphere':
        return <sphereGeometry args={[1, 64, 64]} />;
      case 'box':
        return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 32, 64]} />;
      case 'cylinder':
        return <cylinderGeometry args={[0.8, 0.8, 1.5, 64]} />;
      case 'plane':
        return <planeGeometry args={[3, 3]} />;
      default:
        return <sphereGeometry args={[1, 64, 64]} />;
    }
  };

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      {getGeometry()}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export function TexturedObject({
  texturePath,
  objectType = 'sphere',
  label,
  rotate = true,
  width = '100%',
  height = 400,
}: TexturedObjectProps) {
  return (
    <div style={{ width, margin: '0 auto' }}>
      <Canvas
        style={{ height }}
        camera={{ position: [0, 0, 4], fov: 50 }}
        shadows
      >
        <color attach="background" args={['#1a1a1a']} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        {/* Textured object */}
        <TexturedMesh texturePath={texturePath} objectType={objectType} rotate={rotate} />

        {/* Controls */}
        <OrbitControls enableDamping dampingFactor={0.05} />
      </Canvas>

      {label && (
        <div style={{
          textAlign: 'center',
          marginTop: '8px',
          fontSize: '14px',
          color: '#666',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          {label}
        </div>
      )}
    </div>
  );
}
