import * as React from 'react';

export default React.memo(function Sky({
  position,
  rotation,
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
