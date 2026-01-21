import { Environment, EnvironmentProps } from "@react-three/drei";

type ExperienceProps = EnvironmentProps;

const Experience: React.FC<ExperienceProps> = ({ ...props }) => {
  return <Environment preset="lobby" environmentIntensity={0.5} {...props} />;
};

export default Experience;
