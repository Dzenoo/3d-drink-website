import { Environment } from '@react-three/drei';

export default function SceneEnvironment() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight color="#ffffff" intensity={0.5} position={[-25, 1, 7]} />
      <Environment preset="lobby" environmentIntensity={0.5} />
    </>
  );
}
