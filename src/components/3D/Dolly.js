import { useThree } from '@react-three/fiber';

export default function Dolly({ distance }) {
  const { camera } = useThree();
  camera.position.set(distance - 5, 0, - distance + 5);
}
