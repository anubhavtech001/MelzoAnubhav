import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture, OrbitControls } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/models/scene.glb");
  const modelRef = useRef(null);
  const texture = useTexture(props.item.img);
  const brandingTexture = useTexture("../assets/images/ANUBHAV@4x.png");

  const blackMeshes = ["Mesh_1_4", "Mesh_1_5", "Mesh_1_8", "Mesh_1_11", "Mesh_1_12", "Mesh_1_13"];

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
            material.color = new THREE.Color("#595959");
          } else {
            material.color = new THREE.Color(props.item.color[0]);
          }

          material.roughness = 0.6;   // Reduced roughness for a subtle sheen
          material.metalness = 0.3;   // Increased slightly to enhance highlights
          material.bumpScale = 0.1;   // More pronounced texture for leather detail
          material.normalScale = new THREE.Vector2(0.8, 0.8); // Adds more leather grain effect
          material.needsUpdate = true;
          
        }
      }
    });
  }, [nodes, props.item]);

  

  return (
    <>
     <OrbitControls 
  
  enablePan={true} 
  enableRotate={true} 
  maxPolarAngle={Math.PI} 
  minPolarAngle={0} 
 
/>


<group {...props} dispose={null} ref={modelRef} rotation={[0, Math.PI / 2, 0]}> {/* Default rotation 90 degrees */}
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

        {/* Branding Planes with Smaller Logo */}
        {/* <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.2, 0.5]}>
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial map={brandingTexture} transparent />
        </mesh>

        <mesh position={[0, 0, -3]} rotation={[0, 0, 0]} scale={[0.5, 0.2, 0.5]}>
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial map={brandingTexture} transparent />
        </mesh>

        <mesh position={[0, 0, 3]} rotation={[0, Math.PI, 0]} scale={[0.5, 0.2, 0.5]}>
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial map={brandingTexture} transparent />
        </mesh>

        <mesh position={[-3, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={[0.5, 0.2, 0.5]}>
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial map={brandingTexture} transparent />
        </mesh>

        <mesh position={[3, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[0.5, 0.2, 0.5]}>
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial map={brandingTexture} transparent />
        </mesh>

        <mesh position={[0, 3, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.5, 0.2, 0.5]}>
          <planeGeometry args={[5, 2]} />
          <meshBasicMaterial map={brandingTexture} transparent />
        </mesh> */}
      </group>
    </>
  );
}

export default Model;

useGLTF.preload("/models/scene.glb");
