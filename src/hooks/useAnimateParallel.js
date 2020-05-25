import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const useAnimateParallel = ({animations, iterations, bounce}) => {
  const realAnimations = animations.map(({animation}) => {
    debugger;
    return animation;
  });

  const parallelAnimation =
    iterations === 1
      ? Animated.parallel(realAnimations)
      : Animated.loop(Animated.parallel(realAnimations), {iterations});

  const animate = () => {
    parallelAnimation.start();
  };

  useEffect(animate, [animations]);
};

export default useAnimateParallel;
