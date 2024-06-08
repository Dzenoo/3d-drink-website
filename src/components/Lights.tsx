import React from "react";

const Lights: React.FC = () => {
  return (
    <>
      <ambientLight color="#ffffff" intensity={4.5} />

      <directionalLight
        color="#ffffff"
        intensity={5.5}
        castShadow
        position={[1, 1, 5]}
      />
    </>
  );
};

export default Lights;
