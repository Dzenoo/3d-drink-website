import React from "react";

const Lights: React.FC = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        color="#ffffff"
        intensity={0.5}
        castShadow
        position={[-25, 1, 7]}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
    </>
  );
};

export default Lights;
