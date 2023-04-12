import * as React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import '../App.css';

export function MyCanvas() {
  // The animation will run between the range (0, 20), which will also be the distance to objects
  const distanceStart = 0, distanceEnd = 20;
  const [distance, setDistance] = React.useState(distanceStart);

  return (
    <>
      <div className='canvas-as-background'>
        <Suspense fallback={null}>
          <Canvas
            shadows
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
            camera={{ position: [-1, 0, 1], fov: 100, near: 0.1, far: 30 }}
          >
            <color attach='background' args={[255, 255, 255]} />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}
