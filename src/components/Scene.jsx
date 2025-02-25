import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";

const AnimatedTorusKnot = () => {
  const torusRef = useRef();
  const [rotationSpeed, setRotationSpeed] = useState(0.05);
  const [lastDirection, setLastDirection] = useState(1);

  useEffect(() => {
    let timeout;

    const handleScroll = (event) => {
      const delta = event.deltaY > 0 ? 0.02 : -0.02;
      setRotationSpeed(delta);
      setLastDirection(delta > 0 ? 1 : -1);

      clearTimeout(timeout);
      timeout = setTimeout(() => setRotationSpeed(0.002 * lastDirection), 500);
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [lastDirection]);

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += rotationSpeed;
      torusRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <motion.group
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <TorusKnot args={[1, 0.4, 128, 32]} ref={torusRef}>
        <meshPhysicalMaterial
          color="#1f2a44"
          metalness={0.95}
          roughness={0.25}
          clearcoat={0.5}
          clearcoatRoughness={0.25}
          reflectivity={0.9}
          transmission={0.2}
          envMapIntensity={2}
        />
      </TorusKnot>
    </motion.group>
  );
};

const TorusKnotScene = () => {
  const [fov, setFov] = useState(40);

  useEffect(() => {
    const updateFov = () => {
      const width = window.innerWidth;
      const scale = window.visualViewport?.scale || 1; // Detect zoom level

      let newFov = 40;
      if (width / scale < 500) newFov = 75; // Mobile
      else if (width / scale < 1024) newFov = 50; // Tablets

      setFov(newFov);
    };

    updateFov(); // Initial check
    window.addEventListener("resize", updateFov);
    
    // Add a separate listener for visualViewport scale change (zoom)
    const checkZoom = () => {
      updateFov();
    };

    window.visualViewport?.addEventListener("resize", checkZoom);
    window.visualViewport?.addEventListener("scroll", checkZoom);

    return () => {
      window.removeEventListener("resize", updateFov);
      window.visualViewport?.removeEventListener("resize", checkZoom);
      window.visualViewport?.removeEventListener("scroll", checkZoom);
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov }}
        style={{ width: "100%", height: "100%", display: "block" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight color="#00d5f3" intensity={0.6} />
        <directionalLight color="#00d5f3" position={[0, 5, 5]} intensity={3.5} />
        <directionalLight color="#00d5f3" position={[0, -5, -5]} intensity={3.5} />
        <directionalLight color="#fa955c" position={[0, -5, 5]} intensity={2.8} />
        <directionalLight color="#fa955c" position={[0, 5, -5]} intensity={2.8} />

        <AnimatedTorusKnot />
        <Environment preset="city" background={false} />
        <OrbitControls enablePan enableRotate enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default TorusKnotScene;
