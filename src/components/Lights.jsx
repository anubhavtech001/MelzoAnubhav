import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    <group name="lights">
      {/** 
       * Ambient light to provide base illumination without over-brightening the scene.
       * Reduced intensity to maintain leather contrast.
       */}
      <ambientLight intensity={0.15} color={"#777777"} />

      {/**
       * Directional light for shadows and texture depth.
       * Slightly lowered intensity to prevent over-brightening.
       */}
      <directionalLight
        intensity={1.2} // Reduced brightness
        position={[3, 5, -3]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        color={"#ffffff"}
      />

      {/**
       * Environment lighting for indirect illumination.
       * Lowered intensity to keep a leather-cut effect.
       */}
      <Environment resolution={256} preset="warehouse">
        <group>
          {/** 
           * Key Light - Reduced intensity for better contrast.
           */}
          <Lightformer
            form="rect"
            intensity={2.5} // Lower intensity
            position={[-2, 1, -10]}
            scale={5}
            color={"#cccccc"}
          />

          {/** Soft Fill Light from Side-Left */}
          <Lightformer
            form="rect"
            intensity={1} // Lowered for more shadows
            position={[-8, 3, 2]}
            scale={4}
            rotation-y={Math.PI / 2}
            color={"#999999"}
          />

          {/** Rim Light from Side-Right */}
          <Lightformer
            form="rect"
            intensity={1.2} // Less rim brightness
            position={[8, 2, 1]}
            scale={4}
            rotation-y={Math.PI / 2}
            color={"#aaaaaa"}
          />

          {/** Overhead Light for Texture Highlights */}
          <Lightformer
            form="circle"
            intensity={1.5} // Soft light for texture depth
            position={[0, 8, 0]}
            scale={3}
            color={"#888888"}
          />

          {/** SpotLight for Leather Texture Details */}
          <spotLight
            intensity={2} // Slightly dimmer
            position={[0, 3, 3]}
            angle={0.3}
            penumbra={0.6}
            castShadow
            color={"#ffffff"}
          />

          {/** Point Light for Subtle Surface Details */}
          <pointLight
            intensity={1.5} // Reduced highlight effect
            position={[2, 2, -4]}
            decay={1.8}
            distance={10}
            color={"#cccccc"}
          />

          {/** Ground Fill Light - Soft & Subtle */}
          <Lightformer
            form="circle"
            intensity={0.8} // Reduced brightness
            position={[0, -4, 0]}
            scale={2}
            color={"#666666"}
          />
        </group>
      </Environment>

      {/**
       * Additional spotlights for controlled shadows and contrast.
       */}
      <spotLight
        position={[-3, 6, 4]}
        angle={0.2}
        penumbra={0.4}
        decay={0.5}
        intensity={1.5} // Reduced intensity
        color={"#dddddd"}
        castShadow
      />

      <spotLight
        position={[0, 7, 3]}
        angle={0.3}
        penumbra={0.5}
        decay={0.8}
        intensity={1.8} // Slightly dimmer for shadow emphasis
        castShadow
      />
    </group>
  );
};

export default Lights;
