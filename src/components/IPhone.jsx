import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture, OrbitControls } from "@react-three/drei"; // Added OrbitControls

function Model(props) {
  const { nodes, materials } = useGLTF("/models/scene.glb");
  const modelRef = useRef(null);
  const texture = useTexture(props.item.img);
  const brandingTexture = useTexture("../assets/images/ANUBHAV@4x.png"); // Updated path

  const blackMeshes = ["Mesh_1_4", "Mesh_1_5", "Mesh_1_8", "Mesh_1_11", "Mesh_1_12", "Mesh_1_13"]; // Add mesh names here to make them black

  useEffect(() => {
    Object.entries(nodes).forEach(([name, node]) => {
      if (node && node.material) {
        const material = node.material;
        const excludedMaterials = [
          "zFdeDaGNRwzccye",
          "ujsvqBWRMnqdwPx",
          "hUlRcbieVuIiOXG",
          "jlzuBkUzuJqgiAK",
          "xNrofRCqOXXHVZt"
        ];

        if (!excludedMaterials.includes(material.name)) {
          if (blackMeshes.includes(name)) {
            material.color = new THREE.Color("#595959"); // Set to greyish black
          } else {
            material.color = new THREE.Color(props.item.color[0]);
          }

          material.roughness = 0.8;
          material.metalness = 0.2;
          material.bumpScale = 0.05;
          material.needsUpdate = true;
        }
      }
    });
  }, [nodes, props.item]);

  return (
    <>
      <OrbitControls 
        enableZoom={true} 
        enablePan={true} 
        enableRotate={true} 
        maxPolarAngle={Math.PI} 
        minPolarAngle={0} 
      /> {/* Updated OrbitControls for full rotation */}

      <group {...props} dispose={null} ref={modelRef}>
        <group position={[-0.75, 1.023, 0.055]} scale={0.148}>
          <group position={[5.084, -6.932, -0.376]}>
            {Object.keys(nodes).map((key, index) => (
              nodes[key].geometry && nodes[key].material ? (
                <mesh
                  key={index}
                  castShadow
                  receiveShadow
                  geometry={nodes[key].geometry}
                  material={nodes[key].material}
                />
              ) : null
            ))}
          </group>
        </group>

        {/* Branding Planes on All Sides */}
        <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.4, 1]}>
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial map={brandingTexture} transparent />
        </mesh>

        <mesh position={[0, 0, -3]} rotation={[0, 0, 0]} scale={[1, 0.4, 1]}> {/* Back Side */}
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial map={brandingTexture} transparent />
        </mesh>

        <mesh position={[0, 0, 3]} rotation={[0, Math.PI, 0]} scale={[1, 0.4, 1]}> {/* Front Side */}
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial map={brandingTexture} transparent />
        </mesh>

        <mesh position={[-3, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.4, 1]}> {/* Left Side */}
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial map={brandingTexture} transparent />
        </mesh>

        <mesh position={[3, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 0.4, 1]}> {/* Right Side */}
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial map={brandingTexture} transparent />
        </mesh>

        <mesh position={[0, 3, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.4, 1]}> {/* Top Side */}
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial map={brandingTexture} transparent />
        </mesh>
      </group>
    </>
  );
}

export default Model;

useGLTF.preload("/models/scene.glb");
