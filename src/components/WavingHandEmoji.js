import * as React from 'react';
import { useSpring, animated, to, config } from '@react-spring/web';

export default React.memo(function WavingHandEmoji() {
  const { theta, scale } = useSpring({
    from: { theta: 0, scale: 0 },
    to: async (next) => {
      let counter = 0;
      while (counter < 2) {
        await next({ theta: Math.PI / 8, scale: 1 });
        await next({ theta: -Math.PI / 8, scale: 1 });
        counter++;
      }
      await next({ theta: 0, scale: 0 });
    },
    config: { ...config.wobbly, duration: 150 },
    delay: 3000,
    loop: true,
  });

  const transformValue = (theta, scale) => `rotate(${theta}rad) scale(${scale})`;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <animated.span
        style={{
          fontSize: "3rem",
          transform: to([theta, scale], transformValue)
        }}
      >
        👋🏻
      </animated.span>
    </div>
  );
});
