import * as React from 'react';
import { DoubleSide } from 'three';
import { a } from '@react-spring/three';

export default function Wall({
  size,
  spring,
  start,
  end,
  positionStart,
  positionEnd,
  rotationStart,
  rotationEnd,
  scaleStart = 0,
  scaleEnd = 1,
}) {
  const aPositionX = spring.to([0, start, end, 20], [positionStart.x, positionStart.x, positionEnd.x, positionEnd.x]);
  const aPositionY = spring.to([0, start, end, 20], [positionStart.y, positionStart.y, positionEnd.y, positionEnd.y]);
  const aPositionZ = spring.to([0, start, end, 20], [positionStart.z, positionStart.z, positionEnd.z, positionEnd.z]);
  const aScale     = spring.to([0, start, end, 20], [scaleStart, scaleStart, scaleEnd, scaleEnd]);
  const aRotationX = spring.to([0, start, end, 20], [rotationStart.x, rotationStart.x, rotationEnd.x, rotationEnd.x]);
  const aRotationY = spring.to([0, start, end, 20], [rotationStart.y, rotationStart.y, rotationEnd.y, rotationEnd.y]);
  const aRotationZ = spring.to([0, start, end, 20], [rotationStart.z, rotationStart.z, rotationEnd.z, rotationEnd.z]);

  return (
    <a.mesh
      position-x={aPositionX}
      position-y={aPositionY}
      position-z={aPositionZ}
      scale={aScale}
      rotation-x={aRotationX}
      rotation-y={aRotationY}
      rotation-z={aRotationZ}
      receiveShadow>
      <planeGeometry args={[size, size]} />
      <meshStandardMaterial color={"white"} side={DoubleSide} />
    </a.mesh>
  );
};
