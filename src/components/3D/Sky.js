import * as React from 'react';
import { Vector3 } from 'three';

export default React.memo(function Sky({
  position = new Vector3(5, 0, -5),
  rotation = [0, - Math.PI / 4, 0],
  size = 200,
  holeRadius = 0.1,
  color = 'black'
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={[size, size]}/>
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh>
        <sphereGeometry args={[holeRadius]} />
        <meshBasicMaterial color={"white"} />
      </mesh>
    </group>
  )
});
