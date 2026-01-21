"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import { mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";

import vertexShader from "./shaders/liquid.vert";
import fragmentShader from "./shaders/liquid.frag";

type LiquidProps = {
  radius?: number;
  detail?: number;
  colorA?: string;
  colorB?: string;
  position?: [number, number, number];
};

const Liquid: React.FC<LiquidProps> = ({
  radius = 2.5,
  detail = 20,
  colorA = "#7300ff",
  colorB = "#c800ff",
  position = [0, 0, 0],
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create geometry
  const geometry = useMemo(() => {
    let geom: any = new THREE.IcosahedronGeometry(radius, detail);
    geom = mergeVertices(geom);
    geom.computeTangents();
    return geom;
  }, [radius, detail]);

  // Create material with uniforms
  const material = useMemo(() => {
    const mat = new CustomShaderMaterial({
      baseMaterial: THREE.MeshPhysicalMaterial,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: new THREE.Uniform(0),
        uPositionFrequency: new THREE.Uniform(0.5),
        uTimeFrequency: new THREE.Uniform(0.4),
        uStrength: new THREE.Uniform(0.3),
        uWarpPositionFrequency: new THREE.Uniform(0.38),
        uWarpTimeFrequency: new THREE.Uniform(0.12),
        uWarpStrength: new THREE.Uniform(1.7),
        uColorA: new THREE.Uniform(new THREE.Color(colorA)),
        uColorB: new THREE.Uniform(new THREE.Color(colorB)),
      },
      silent: true,
      metalness: 0,
      roughness: 0.5,
      color: "#ffffff",
      transmission: 0,
      ior: 1.5,
      thickness: 1.5,
      transparent: true,
      wireframe: false,
    });

    return mat;
  }, [colorA, colorB]);

  // Create depth material
  const depthMaterial = useMemo(() => {
    return new CustomShaderMaterial({
      baseMaterial: THREE.MeshDepthMaterial,
      vertexShader: vertexShader,
      uniforms: material.uniforms,
      silent: true,
      depthPacking: THREE.RGBADepthPacking,
    });
  }, [material]);

  // Update time uniform
  useFrame((state) => {
    if (material.uniforms.uTime) {
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      customDepthMaterial={depthMaterial as any}
      position={position}
    />
  );
};

export default Liquid;
