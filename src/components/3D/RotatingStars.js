import * as React from 'react';
import { Stars } from '@react-three/drei';

export default React.memo(function RotatingStars({
  position,
  rotation,
  rotationSpeed,
}) {
  return (
    <Stars radius={1} depth={4} count={300} factor={0.6} saturation={0} speed={2} fade />
  );
});
