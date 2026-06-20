"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Float, Sparkles, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Smoothly animate scale based on active and hovered state
      const targetScale = active ? 1.5 : hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHover(true);
        }}
        onPointerOut={(event) => setHover(false)}
        onClick={(event) => setActive(!active)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial 
          color={hovered ? "#6366f1" : "#8b5cf6"}
          roughness={0.2}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={active}
        />
      </mesh>
    </Float>
  );
}

export default function InteractiveScene() {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
        
        <FloatingShape />
        
        <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#c084fc" />
        
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.5} 
          scale={10} 
          blur={2} 
          far={4} 
          color="#000000"
        />
        
        <Environment preset="city" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
