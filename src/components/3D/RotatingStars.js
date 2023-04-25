import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default React.memo(function RotatingStars({
  position,
  rotation,
  rotationSpeed,
}) {
  const starsRef = React.useRef();

  useFrame((_, dt) => {
    starsRef.current.rotation.y += dt / rotationSpeed;
  });

  return (
    <group ref={starsRef} position={position} rotation={rotation}>
      <Stars radius={1} depth={4} count={300} factor={0.6} saturation={0} speed={2} fade />
    </group>
  );
});
