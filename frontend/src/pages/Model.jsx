import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader, MTLLoader } from "three-stdlib";
import { motion } from "motion/react";

function Model() {
  const ref = useRef(); // Reference to the model

  // Infinite rotation using useFrame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Adjust speed here
    }
  });

  const materials = useLoader(MTLLoader, "/model1.mtl");
  const obj = useLoader(OBJLoader, "/model.obj", (loader) => {
    loader.setMaterials(materials);
  });

  return <primitive ref={ref} object={obj} scale={5} />;
}

export default function App() {
  return (
    <motion.div drag style={{ height: "500px", width: "100%" }}>
      <Canvas camera={{ position: [0, 10, 50], fov: 40 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 10, 5]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </motion.div>
  );
}
