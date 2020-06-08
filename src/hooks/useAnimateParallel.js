import {useEffect} from 'react';
import {Animated} from 'react-native';

const useAnimateParallel = ({
  animations = [],
  iterations = 1,
  callback = () => {},
}) => {
  const realAnimations = animations.map(({animation}) => {
    return animation;
  });

  const parallelAnimation =
    iterations === 1
      ? Animated.parallel(realAnimations)
      : Animated.loop(Animated.parallel(realAnimations), {iterations});

  const animate = () => {
    parallelAnimation.start(callback);
  };

  useEffect(animate, [animations]);
};

export default useAnimateParallel;
