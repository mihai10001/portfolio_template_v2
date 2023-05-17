import * as React from 'react';
import { DoubleSide } from 'three';

export default function Wall({
  size,
  spring,
  start,
  end,
  positionStart,
  positionEnd,
}) {
  const aPositionX = spring.to([0, start, end, 20], [positionStart.x, positionStart.x, positionEnd.x, positionEnd.x]);
  const aPositionY = spring.to([0, start, end, 20], [positionStart.y, positionStart.y, positionEnd.y, positionEnd.y]);
  const aPositionZ = spring.to([0, start, end, 20], [positionStart.z, positionStart.z, positionEnd.z, positionEnd.z]);
  return (
    <a.mesh
      position-x={aPositionX}
      position-y={aPositionY}
      position-z={aPositionZ}
      receiveShadow>
      <planeGeometry args={[size, size]} />
      <meshStandardMaterial color={"white"} side={DoubleSide} />
    </a.mesh>
  );
};
