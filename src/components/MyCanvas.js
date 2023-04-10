import * as React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import '../App.css';

export function MyCanvas() {
  // The animation will run between the range (0, 20), which will also be the distance to objects
  const distanceStart = 0, distanceEnd = 20;

  return (
    <>
      <div className='canvas-as-background'>
        <Suspense fallback={null}>
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}
