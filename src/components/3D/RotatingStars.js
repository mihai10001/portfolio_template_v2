import * as React from 'react';
import { MathUtils } from 'three';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { config } from '@react-spring/web';
import { useSpring, a } from '@react-spring/three';

export default React.memo(function RotatingStars({
  position = [0, 0, 0],
  rotation = [0, - Math.PI / 4, 0],
  rotationSpeed = MathUtils.randFloat(80, 100),
}) {
  const starsRef = React.useRef();
  const { aScale } = useSpring({
    from: { aScale: 0 },
    to: { aScale: 1 },
    config: config.wobbly,
    duration: 500
  });

  useFrame((_, dt) => {
    starsRef.current.rotation.y += dt / rotationSpeed;
  });

  return (
    <a.group ref={starsRef} position={position} scale={aScale} rotation={rotation}>
      <Stars radius={1} depth={4} count={300} factor={0.6} saturation={0} speed={2} fade />
    </a.group>
  );
});
