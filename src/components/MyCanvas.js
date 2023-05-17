import * as React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, config } from '@react-spring/three';
import Dolly from './3D/Dolly';
import CanvasContent from './3D/CanvasContent';

import '../App.css';

export function MyCanvas() {
  // The animation will run between the range (0, 20), which will also be the distance to objects
  const distanceStart = 0, distanceEnd = 20;
  const [distance, setDistance] = React.useState(distanceStart);
  const [springs, springsApi] = useSpring(() => ({
    distance: distanceStart,
  }), []);


  return (
    <>
      <div className='canvas-as-background'>
        <Suspense fallback={null}>
          <Canvas
            shadows
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
            camera={{ position: [-5, 0, 5], fov: 100, near: 0.1, far: 30 }}
          >
            <Dolly distance={distance} />
            <CanvasContent spring={springs.distance} />
            <color attach='background' args={[255, 255, 255]} />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}
