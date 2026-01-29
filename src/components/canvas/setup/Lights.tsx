export default function Lights() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        color="#ffffff"
        intensity={0.5}
        position={[-25, 1, 7]}
      />
    </>
  );
}
