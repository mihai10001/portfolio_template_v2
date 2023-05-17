import * as React from 'react';
import { DoubleSide } from 'three';

export default function Wall({
  size,
}) {
  return (
    <mesh receiveShadow>
      <planeGeometry args={[size, size]} />
      <meshStandardMaterial color={"white"} side={DoubleSide} />
    </mesh>
  );
};
