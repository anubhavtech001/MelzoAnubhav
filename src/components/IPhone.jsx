

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/models/scene.glb");

  const texture = useTexture(props.item.img);

  useEffect(() => {
    Object.entries(materials).map((material) => {
      // these are the material names that can't be changed color
      if (
        material[0] !== "zFdeDaGNRwzccye" &&
        material[0] !== "ujsvqBWRMnqdwPx" &&
        material[0] !== "hUlRcbieVuIiOXG" &&
        material[0] !== "jlzuBkUzuJqgiAK" &&
        material[0] !== "xNrofRCqOXXHVZt"
      ) {
        material[1].color = new THREE.Color(props.item.color[0]);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props.item]);

  return (
    
    <group {...props} dispose={null}>
    <group position={[-0.75, 1.023, 0.055]} scale={0.148}>
      <group position={[5.084, -6.932, -0.376]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_1.geometry}
          material={materials.Material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_2.geometry}
          material={materials.Material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_3.geometry}
          material={materials.Material_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_4.geometry}
          material={materials.Material_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_5.geometry}
          material={materials.Material_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_6.geometry}
          material={materials.Material_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_7.geometry}
          material={materials.Material_6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_8.geometry}
          material={materials.Material_7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_9.geometry}
          material={materials.Material_8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_10.geometry}
          material={materials.Material_9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_11.geometry}
          material={materials.Material_10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_12.geometry}
          material={materials.Material_11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1_13.geometry}
          material={materials.Material_12}
        />
      </group>
    </group>
  </group>
  );
}

export default Model;

useGLTF.preload("/models/scene.glb");
