"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

const Sphere = () => {
  return (
    <Canvas className="flex justify-center items-center">
      <pointLight position={[0, 0, 20]} intensity={4000} />
      <OrbitControls
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
        enableZoom={false}
      />
      <Suspense fallback={null}>
        <group scale={[2.3, 2.3, 2.3]} position={[0, 0, 0]}>
          <Model />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default Sphere;
