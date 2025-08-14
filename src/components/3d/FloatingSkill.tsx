import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingSkillProps {
  skill: string;
  position: [number, number, number];
  color: string;
}

export default function FloatingSkill({ skill, position, color }: FloatingSkillProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const textRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 0.8, 0.2]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      <Text
        ref={textRef}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/orbitron.woff"
        position={[0, 0, 0.11]}
      >
        {skill}
      </Text>
    </group>
  );
}